import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBestMovies } from '../redux/movies/movies.actions';

import MovieItem from '../components/MovieItem/MovieItem.component';
import { StyledPage } from '../GlobalStyle';

export class BestMovies extends Component {
  renderBestMoviesList() {
      console.log('BEST MOVIES DID MOUNT',this.props)
    return this.props.bestMovies.map(movie => <MovieItem movie={movie} />);
  }

  componentDidMount() {
    this.props.fetchBestMovies(); 

  }

  render() {
    return <StyledPage>
      {this.props.bestMovies && this.renderBestMoviesList()}
    </StyledPage>;
  }
}

const mapStateToProps = state => {
  return {
    bestMovies: state.movies.bestMovies
  };
};

export default connect(mapStateToProps, { fetchBestMovies })(BestMovies);
