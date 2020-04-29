import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMoviesByGenre  } from '../redux/movies/movies.actions';
import { fetchGenres } from '../redux/genres/genres.actions';

import MovieItem from '../components/MovieItem/MovieItem.component';
import Dropdown from '../components/Dropdown';

class Explore extends Component {
  state = { 
    genreId: 12,// this.props.match.params.genre,                ///check this out
    page: 1,
    isFetching: false
  };

  renderMovieList = () => {
      console.log('rendering genre list')
      if (this.props.movies.movies.length) {
          return this.props.movies.movies.map(movie => (
            <MovieItem movie={movie} />
          
          ));
      }
  };

  onSelectGenre = value => {
      console.log('chacnged genre', value)
    this.setState(prevState => ({
        genreId: value,
        page: 1
    }));
  }

  handleScroll = () => {
    const bottomOffset =
    document.documentElement.scrollHeight - (window.innerHeight + window.scrollY);
      console.log('BOTTOM OFFSET', bottomOffset, window.innerHeight, window.scrollY, document.documentElement.scrollHeight)
    if (
        bottomOffset >= 0 && bottomOffset <= 50
    //   bottomOffset <= 150 &&
    //   bottomOffset >= 0 //could take care of launching only if scroll DOWN NOT UP
    ) {
        console.log('REACHED BOTTOM IN EXLPLORE hello')
      this.setState(prevState => {
        if (prevState.page < this.props.movies.totalPages) {
          //could do better than  'this.props.movies.total_pages'
          debugger;
          return {
            page: prevState.page + 1,
            isFetching: true
          };
        }
      });
    }
  };

  componentDidMount() {
    // const genreId = this.props.match.params.genre;
    const { fetchMoviesByGenre, movies } = this.props;
    const { genreId, page } = this.state;
    if (!movies || movies.length === 0) {
      fetchMoviesByGenre(genreId, false, page);
    }

    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    const { genreId, page } = this.state;
    // const genreId = this.props.match.params.genre;
    console.log('SELECTED VALUE FROM EXPLORE UPDATE', this.state.genreId)
    if (this.state.genreId === prevState.genreId && this.state.page !== prevState.page) {
      this.props.fetchMoviesByGenre(this.state.genreId, false, this.state.page);
    } else if (this.state.genreId !== prevState.genreId) {// if (prevState.genreId !== this.state.genreId) {
        this.props.fetchMoviesByGenre(this.state.genreId, true, this.state.page);
    }

    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
      <h1></h1>
      {this.props.genres && <Dropdown options={this.props.genres} purpose='Genres' onChange={this.onSelectGenre}/>}
      {console.log('about to render by genre list', this.props)}
        {this.props.movies && this.renderMovieList()}
        {this.state.isFetching && 'Loading...'}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.moviesByGenre,
    genres: state.genres.genres
  };
};

export default connect(mapStateToProps, { fetchMoviesByGenre, fetchGenres })(Explore);
