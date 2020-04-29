import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchRandomMovie } from '../../redux/movies/movies.actions';
import { selectRandomMovie } from '../../redux/movies/movies.selector';

import MovieItem from '../../components/MovieItem/MovieItem.component';

import { StyledRandomPage, StyledTitle, StyledButton } from './Random.style';

export class Home extends Component {
  componentDidMount() {
    this.props.fetchRandomMovie();
  }

  render() {
    const { fetchRandomMovie, randomMovie } = this.props;

    return (
      <StyledRandomPage>
        <StyledTitle className='random__heading'>a random appetizer</StyledTitle>
        <StyledButton className='random__generate-button' onClick={() => fetchRandomMovie()}>
          ain't hungry yet
        </StyledButton>
        {randomMovie && (
          <MovieItem movie={randomMovie} className='random' />
        )}
      </StyledRandomPage>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    randomMovie: selectRandomMovie
});

export default connect(mapStateToProps, { fetchRandomMovie })(Home);
