import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchBestMovies } from '../redux/movies/movies.actions';
import { selectBestMovies } from '../redux/movies/movies.selector';

import { GeneralMovieList }  from '../components/MovieList/MovieList.component';
import MovieItem from '../components/MovieItem/MovieItem.component';

import { StyledPage } from '../GlobalStyle';

export class BestMovies extends Component {
  // renderBestMoviesList() {
  //     console.log('BEST MOVIES DID MOUNT',this.props)
  //   return this.props.bestMovies.map(movie => <MovieItem movie={movie} />);
  // }


  render() {
    const { bestMovies } = this.props;
    console.log('INSIDE BEST MOVIES', this.props, bestMovies)

    // console.log(bestMovies ? [...bestMovies.movies] : 'NNNNNNNNNNNNNNNNNNNNOT BEST MOVIES');
    
      // <StyledPage>
      //   {this.props.bestMovies && this.renderBestMoviesList()}
      // </StyledPage>

      return (
      <StyledPage page={1}>
        <h1>Top Rated</h1>
    { //   {bestMovies ?
        <GeneralMovieList fetcher={fetchBestMovies} selector={selectBestMovies}/> 
   //     :
     //   <PendingIndicator />
      //  }
    }
      </StyledPage>
      );
  }
}

const mapStateToProps = createStructuredSelector({
    bestMovies: selectBestMovies
});

const mapStateDispatchToProps = dispatch => ({
    fetchMovies: pageNum => dispatch(fetchBestMovies(pageNum)) 
});

export default connect(mapStateToProps, mapStateDispatchToProps)(BestMovies);
