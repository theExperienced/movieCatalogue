import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchMoviesByGenre, fetchBestMovies, fetchMoviesByCriteria } from '../../redux/movies/movies.actions';
import { selectMoviesByGenre, selectBestMovies, selectMoviesByCriteria } from '../../redux/movies/movies.selector';
import { selectGenreList } from '../../redux/genres/genres.selector';

import MovieItem from '../MovieItem/MovieItem.component';
import PendingIndicator from '../PendingIndicator/PendingIndicator.component';

import { StyledListContainer, StyledList, StyledTitle } from './MovieList.style';

const MovieList = ({ isGenreList,  data, genreId, listData, selector, fetchMovies }) => {
  const [ atLeftEnd, setAtLeftEnd ] = useState(true);
  const [ atRightEnd, setAtRightEnd ] = useState(false);
  const [ scrollOffset, setScrollOffset ] = useState(0);

  useEffect(() => {
    console.log('INSIDE MOVIE LIFE USEEFFECT', data)
    fetchMovies();
  }, [])
  // renderGeneralList = movies => {
  //   return (<StyledList>
  //     {
  //       movies.map(movie => <MovieItem movie={movie} isListItem/>)
  //     }
  //     </StyledList>);
  // }
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  // renderGenreList = () => {
  //   const { genreTitle, genreData } = this.props;

  //   return (<div>
  //   <StyledTitle>{genreTitle}</StyledTitle>   
  //   <StyledListContainer>
  //       {
  //         genreData ?
  //       <StyledList>
  //         {
  //           genreData.movies.map(movie => <MovieItem movie={movie} isListItem/>) 
  //         }
  //     </StyledList> : 
  //     <PendingIndicator />
  //       }
  //   </StyledListContainer>
  //    </div>);
  // }
  // const movies = gen
  // const { genreTitle } = listData;

  // console.log('PROPS FROM MOVIE LIST ', movieList, listData, gore)
  const onWheel = (e, delta = 100) => {
    const { target, deltaY } = e;
    console.log('WHEELING HORZIONTALLY', delta, target)
    deltaY > 0 ? target.parentElement.parentElement.scrollLeft += delta : target.parentElement.parentElement.scrollLeft -= delta;
    // e.stopPropagation();
    e.preventDefault();
  }

  // const onScroll = e => {
  //   const { scrollLeft, clientWidth, scrollWidth } = e.target;
  //   const maxScrollLeft = scrollWidth - clientWidth;

  //   if (scrollLeft === 0) {
  //     console.log('REACHED LEFT END', scrollLeft)
  //     setAtLeftEnd(true);
  //   }else if (scrollLeft === maxScrollLeft) {
  //     console.log('REACHED RIGHT END', maxScrollLeft)
  //     setAtRightEnd(true);
  //   }else {
  //     setAtLeftEnd(false);
  //     setAtRightEnd(false);
  //   }
  //   console.log('SCROLLING HORZIONTALLY', maxScrollLeft, scrollLeft)
  // }

const rootElemRem = 16;
const delta = 25.2 * rootElemRem * 3;

  const scroll = ({ target }, dir) => {
    const list = target.parentElement.lastElementChild;
    const newOffset = scrollOffset + delta * dir
    
    list.scrollTo({
      top: 0, 
      left: newOffset, 
      behavior: 'smooth' 
    });

    setScrollOffset(prevOffset => newOffset)

    const { clientWidth, scrollWidth } = list;
    const maxScrollLeft = scrollWidth - clientWidth;

    if (newOffset === 0) {
      setAtLeftEnd(true);
    }else if (newOffset === maxScrollLeft) {
      setAtRightEnd(true);
    }else {
      setAtLeftEnd(false);
      setAtRightEnd(false);
    }

    if (target.scrollLeft >= clientWidth - 150) {
      const { page, totalPages} = data;
      if (page + 1 <= totalPages)
        fetchMovies(data.page + 1);
    }
  }

  
  // const keepTrackOfEnds = e => {
  //   const { target, deltaY } = e;
  //   console.log('WHEELING HORZIONTALLY', delta, target)
  //   deltaY > 0 ? target.parentElement.parentElement.scrollLeft += delta : target.parentElement.parentElement.scrollLeft -= delta;
  // }
  console.log('RENDERING NEW MOVIE LIST', data)


  return (
    
    <StyledListContainer atLeftEnd={atLeftEnd} atRightEnd={atRightEnd}>
      <span className="leftEnd" onClick={e => scroll(e, -1)}>&#8249;</span>
      <span className="rightEnd" onClick={e => scroll(e, 1)}>&#8250;</span>
      {data ? 
          <StyledList offset={scrollOffset}>     {/*onWheel={onWheel} onScroll={onScroll}*/}
            {
              data.movies.map(movie => <MovieItem movie={movie} isListItem/>) 
            }
          </StyledList> :
          <PendingIndicator />
      }
    </StyledListContainer>
  )
}

const mapStateToPropsGenres = (state, { genreId }) => ({
  genres: selectGenreList(state),
  data: selectMoviesByGenre(genreId)(state),
});

const mapDispatchToPropsGenres = (dispatch, { genreId, fetcher }) => ({
  fetchMovies: (pageNum = 1) => dispatch(fetcher(genreId, pageNum))
});

const mapStateToProps = (state, { selector }) => ({
  data: selector(state) //isBestMovies ? selectBestMovies(state) : selectMoviesByCriteria(state)
});

const mapDispatchToProps = (dispatch, { fetcher }) => ({
  // fetchMovies: isBestMovies ? page => dispatch(fetchBestMovies(page)) : (formValues, page, isNewQuery) => dispatch(fetchMoviesByCriteria(formValues, page, isNewQuery))
  fetchMovies: (pageNum = 1) => dispatch(fetcher(pageNum))
});

export const GenreMovieList = connect(mapStateToPropsGenres, mapDispatchToPropsGenres)(MovieList);
export const GeneralMovieList = connect(mapStateToProps, mapDispatchToProps)(MovieList);
