import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectGenreList } from '../../redux/genres/genres.selector';
import { fetchMoviesByGenre } from '../../redux/movies/movies.actions';
import { selectAllMoviesByGenre } from '../../redux/movies/movies.selector';

import { GenreMovieList } from '../MovieList/MovieList.component';

import { StyledListComplex } from './MovieListComplex.style';
import { StyledTitle } from '../MovieList/MovieList.style';

const MovieListComplex = props => {
  const { moviesGalore, genres } = props;
  const [ genresNum, setGenresNum ] = useState(Math.max(5, Object.keys(moviesGalore).length));
  const [ hasMore, setHasMore ] = useState(true);
  const genresLength = Object.keys(genres).length;

  useEffect(() => {
    if (genres.length <= genresNum - 1) {
      setGenresNum(genres.length);          
      setHasMore(false);
    }
  }, [genresNum])

  const observer = useRef();
  const lastListRef = useCallback(list => {
    if (observer.current) 
      observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setGenresNum(prevNum => prevNum + 3);
      }
    });
    if (list) observer.current.observe(list)
  }, [hasMore])

  return (
    <StyledListComplex id={'listComplex'}>
      { 
        Object.entries(genres).slice(0, genresNum).map(([value, title], index) => {
            return (
              <div ref={index + 1 === genresNum ? lastListRef : null}>
                <StyledTitle>{title}</StyledTitle> 
                <GenreMovieList isGenreList genreId={value} fetcher={fetchMoviesByGenre}/>
              </div>
            )
          })
      }
    </StyledListComplex>
  );
}

const mapStateToProps = createStructuredSelector({
  genres: selectGenreList,
  moviesGalore: selectAllMoviesByGenre   
});

export default connect(mapStateToProps)(MovieListComplex);
