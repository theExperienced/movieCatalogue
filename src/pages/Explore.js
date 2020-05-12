import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchMoviesByGenre } from '../redux/movies/movies.actions';
import { selectGenreList } from '../redux/genres/genres.selector';
import { selectAllMoviesByGenre } from '../redux/movies/movies.selector';


import MovieItem from '../components/MovieItem/MovieItem.component';
import MovieListComplex from '../components/MovieListComplex/MovieListComplex.component';

import { StyledPage } from '../GlobalStyle';

const Explore = props => {
  // state = { 
  //   // genreId: 12,// this.props.match.params.genre,                ///check this out
  //   // page: 1,
  //   isFetching: false
  // };

  const renderMovieList = () => { 
      console.log('rendering genre list')
      if (this.props.movies.movies.length) {
          return this.props.movies.movies.map(movie => (
            <MovieItem movie={movie} />
          
          ));
      }
  };

  const onSelectGenre = value => {
      console.log('chacnged genre', value)
    this.setState(prevState => ({
        genreId: value,
        page: 1
    }));
  }

  const handleScroll = e => {
    const { target } = e;
    const { scrollHeight, scrollY } = target;
    const bottomOffset = scrollHeight - scrollY;

    console.log('BOTTOM OFFSET BY GENRE', bottomOffset, e);
    // const bottomOffset =
    // document.documentElement.scrollHeight - (window.innerHeight + window.scrollY);
    //   console.log('BOTTOM OFFSET', bottomOffset, window.innerHeight, window.scrollY, document.documentElement.scrollHeight)
    // if (
    //     bottomOffset >= 0 && bottomOffset <= 50
    // //   bottomOffset <= 150 &&
    // //   bottomOffset >= 0 //could take care of launching only if scroll DOWN NOT UP
    // ) {
    //     console.log('REACHED BOTTOM IN EXLPLORE hello')
    //   this.setState(prevState => {
    //     if (prevState.page < this.props.movies.totalPages) {
    //       //could do better than  'this.props.movies.total_pages'
    //       debugger;
    //       return {
    //         page: prevState.page + 1,
    //         isFetching: true
    //       };
    //     }
    //   });
    // }
  };

  // async componentDidMount() {
  //   const { genres, fetchMovies } = this.props;

  //   // await genres.forEach(({ value }) => fetchMovies(value, 1));
  //   // fetchMovies(genres[1].value, 1);
  //   // fetchMovies(genres[2].value, 1);
    
  //   if (genres) {
  //     console.log('FETCHING ALL MOVEIS OBJECT VALUES', Object.values(genres))
  //     Object.keys(genres).forEach(value => fetchMovies(value, 1));
  //     console.log('FETCHING ALL MOVEI BY GENRE', this.props)

  //   }
    
  //   window.addEventListener('scroll', this.handleScroll);
  //   window.addEventListener('wheel', this.handleScroll);
  // }

  // componentDidUpdate(prevProps, prevState) {
    // const { genreId, page } = this.state;
    // // const genreId = this.props.match.params.genre;
    // console.log('SELECTED VALUE FROM EXPLORE UPDATE', this.state.genreId)
    // if (this.state.genreId === prevState.genreId && this.state.page !== prevState.page) {
    //   this.props.fetchMoviesByGenre(this.state.genreId, false, this.state.page);
    // } else if (this.state.genreId !== prevState.genreId) {// if (prevState.genreId !== this.state.genreId) {
    //     this.props.fetchMoviesByGenre(this.state.genreId, true, this.state.page);
    // }

    // window.addEventListener('scroll', this.handleScroll);
  // }
  
  return (
    <StyledPage page={2}>
      <h1>explore by genre</h1>
        <MovieListComplex />
      {/* {console.log('about to render by genre list', this.props)}
        {this.props.movies && this.renderMovieList()}
        {this.state.isFetching && 'Loading...'} */}
    </StyledPage>
  );
  
}

const mapStateToProps = createStructuredSelector({
    movies: selectAllMoviesByGenre,          ///////////NOT SURE NEEDED
    genres: selectGenreList
});

const mapDispatchToProps = dispatch => ({
    fetchMovies: (genreId, page) => dispatch(fetchMoviesByGenre(genreId, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
