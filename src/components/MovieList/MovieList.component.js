import React, { Component, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchMoviesByGenre, fetchBestMovies, fetchMoviesByCriteria } from '../../redux/movies/movies.actions';
import { updateFormValues, resubmit } from '../../redux/form/form.actions';
import { selectMoviesByGenre, selectBestMovies, selectMoviesByCriteria } from '../../redux/movies/movies.selector';
import { selectGenreList } from '../../redux/genres/genres.selector';
import { selectFormValues, selectSubmitSucceeded } from '../../redux/form/form.selector';

import MovieItem from '../MovieItem/MovieItem.component';
import ClipLoader from "react-spinners/ClipLoader";

import { StyledListContainer, StyledList, StyledTitle } from './MovieList.style';

export const ListTokens = {
  GENERAL: 'GENERAL',
  GENRE: 'GENRE',
  CRITERIA: 'CRITERIA'
}

const MovieList = (props) => {
const { data, fetchMovies, values, submitSucceeded, resubmitted, listToken, valuesChanged, setValuesUnchanged } = props;

  const [ atLeftEnd, setAtLeftEnd ] = useState(true);
  const [ atRightEnd, setAtRightEnd ] = useState(false);
  const [ scrollOffset, setScrollOffset ] = useState(0);

  useEffect(() => {
    console.log('INSIDE MOVIE LIFE USEEFFECT', values)
    // formValues ? fetchMovies(formValues) : 
    if (!data || (listToken === ListTokens.CRITERIA && valuesChanged)) {
      fetchMovies();
      // props.setValuesUnchanged();
    }
  }, [])

  useEffect(() => {
    // formValues ? fetchMovies(formValues) : 
    if (data && listToken === ListTokens.CRITERIA && valuesChanged) {
      fetchMovies();
      props.setValuesUnchanged();
    }
  }, [values])

  const onWheel = (e, delta = 100) => {
    const { target, deltaY } = e;
    console.log('WHEELING HORZIONTALLY', delta, target)
    deltaY > 0 ? target.parentElement.parentElement.scrollLeft += delta : target.parentElement.parentElement.scrollLeft -= delta;
    // e.stopPropagation();
    e.preventDefault();
  }
  
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

    console.log('scrolling CURRENT LIST', data)

    if (newOffset >= clientWidth - 650) {
      const { page, totalPages} = data;
      if (page + 1 <= totalPages) {
      console.log('REAHED END OF CURRENT LIST')
        /*values? fetchMovies(values, data.page + 1):*/ fetchMovies(data.page + 1);
      }
    }
  }

  
  // const keepTrackOfEnds = e => {
  //   const { target, deltaY } = e;
  //   console.log('WHEELING HORZIONTALLY', delta, target)
  //   deltaY > 0 ? target.parentElement.parentElement.scrollLeft += delta : target.parentElement.parentElement.scrollLeft -= delta;
  // }
  console.log('RENDERING NEW MOVIE LIST', data)


  return (
    
    <StyledListContainer atLeftEnd={atLeftEnd} atRightEnd={atRightEnd} isLoading={ data ? false : true}>
      <span className="leftEnd" onClick={e => scroll(e, -1)}>&#8249;</span>
      <span className="rightEnd" onClick={e => scroll(e, 1)}>&#8250;</span>
      {data ? 
          <StyledList offset={scrollOffset}>     {/*onWheel={onWheel} onScroll={onScroll}*/}
            {
              data.movies.map(movie => <MovieItem movie={movie} isListItem/>) 
            }
          </StyledList> :
          <ClipLoader size={50} color={"#123abc"} />
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

const mapStateToPropsCriteria = (state) => ({
  data: selectMoviesByCriteria(state),
  formValues: selectFormValues(state),
  submitSucceeded: selectSubmitSucceeded(state)
});

const mapDispatchToPropsCriteria = (dispatch, { values, fetcher }) => ({
  fetchMovies: (pageNum = 1) => dispatch(fetcher(values, pageNum))
});

const mapStateToProps = (state, { selector }) => ({
  data: selector(state), //isBestMovies ? selectBestMovies(state) : selectMoviesByCriteria(state)
});

const mapDispatchToProps = (dispatch, { fetcher, formValues }) => ({
  fetchMovies: (pageNum = 1) => dispatch(fetcher(pageNum))
});

export const GenreMovieList = connect(mapStateToPropsGenres, mapDispatchToPropsGenres)(MovieList);
export const CriteriaMovieList = connect(mapStateToPropsCriteria, mapDispatchToPropsCriteria)(MovieList);
export const GeneralMovieList = connect(mapStateToProps, mapDispatchToProps)(MovieList);
