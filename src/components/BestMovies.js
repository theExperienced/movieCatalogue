import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBestMovies } from "../actions";
import MovieItem from './MovieItem'

export class BestMovies extends Component {
  renderBestMoviesList() {
      console.log('BEST MOVIES DID MOUNT',this.props)
    return this.props.bestMovies.map(movie => <MovieItem movie={movie} />);
  }

  componentDidMount() {
    this.props.fetchBestMovies(); 

  }

  render() {
    return <div>{this.props.bestMovies && this.renderBestMoviesList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    bestMovies: state.movies.bestMovies
  };
};

export default connect(mapStateToProps, { fetchBestMovies })(BestMovies);
