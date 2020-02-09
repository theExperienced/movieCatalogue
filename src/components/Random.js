import React, { Component } from "react";
import { connect } from "react-redux";
import { generateRandomMovie } from "../actions";
import MovieItem from "./MovieItem";

export class Home extends Component {
  componentDidMount() {
    this.props.generateRandomMovie();
  }

  render() {
    return (
      <div className="random__container">
        <h1 className="random__heading">a random appetizer</h1>
        <button className="random__generate-button" onClick={() => this.props.generateRandomMovie()}>
          ain't hungry yet
        </button>
        {this.props.randomMovie && (
          <MovieItem movie={this.props.randomMovie} className="random" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    randomMovie: state.movies.randomMovie
  };
};

export default connect(mapStateToProps, { generateRandomMovie })(Home);
