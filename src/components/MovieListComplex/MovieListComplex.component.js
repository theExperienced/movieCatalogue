import React, { useState, useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectGenreList } from '../../redux/genres/genres.selector';
import { fetchMoviesByGenre } from '../../redux/movies/movies.actions';
import { selectAllMoviesByGenre } from '../../redux/movies/movies.selector';

import { GenreMovieList } from '../MovieList/MovieList.component';

import { StyledListComplex } from './MovieListComplex.style';
import { StyledListContainer, StyledTitle } from '../MovieList/MovieList.style';

const MovieListComplex = props => {
  // const [ genreNum, setGenreNum ] = useState(5);

  const { moviesGalore, genres } = props;
  const genresLength = Object.keys(genres).length;
  console.log('PROPS FROM INSIDE MOVIE LIST COMPOLEX RENDER', genresLength)
  



  const [ genresNum, setGenresNum ] = useState(Math.max(5, Object.keys(moviesGalore).length));
  const [ hasMore, setHasMore ] = useState(true);

  const addThreeMoreGenres = () => {


    setGenresNum(prevNum => prevNum + 3);
    console.log('ADDING THREE MORE GENRES')
  }

  useEffect(() => {
    console.log('USEEFFECT COMPLEX LIST', hasMore)

    if (genres.length <= genresNum - 1) {
      setGenresNum(genres.length);                  //MIGHT BELONG IN USEEFFECT
      setHasMore(false);
    }

    return () => console.log('BYEEEEEEEEEEEEEEEEEE')
  }, [genresNum])

  console.log('BEFORE RENDER COMPLEX LIST', hasMore)


  const observer = useRef();
  const lastListRef = useCallback(list => {
    // if (loading) return
    if (observer.current) 
      observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setGenresNum(prevNum => prevNum + 3);
      }
    });
    if (list) observer.current.observe(list)
  }, [hasMore])                  //add loading to dependencies!!!


  return (
    <StyledListComplex id={'listComplex'}>
      { 
        Object.entries(genres).slice(0, genresNum).map(([value, title], index) => {
            return (
              <div ref={index + 1 === genresNum ? lastListRef : null}>
                <StyledTitle>{title}</StyledTitle> 
                <GenreMovieList isGenreList genreId={value} fetcher={fetchMoviesByGenre}/> {/*moviesGalore={moviesGalore[value].movies} listData={listData}*/}   
              </div>
            )
          })
      }
    </StyledListComplex>
  );
}

const mapStateToProps = createStructuredSelector({
  genres: selectGenreList,
  moviesGalore: selectAllMoviesByGenre             ///////////////////////TRIALLLLL
});

export default connect(mapStateToProps)(MovieListComplex);
