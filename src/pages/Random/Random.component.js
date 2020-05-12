import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchRandomMovie } from '../../redux/movies/movies.actions';
import { selectRandomMovie } from '../../redux/movies/movies.selector';

import MovieItem from '../../components/MovieItem/MovieItem.component';
import Img from 'react-image';
import ClipLoader from "react-spinners/ClipLoader";

import { StyledRandomPage, StyledTitle, StyledButton } from './Random.style';
import { selectLanguageList } from '../../redux/languages/languages.selector';
import { selectGenreList } from '../../redux/genres/genres.selector';

const Random = props => {
  const { fetchRandomMovie, movie, languages } = props;

  const {
      title,
      genres,
      overview,
      vote_average: ratings,
      release_date: releaseDate,
      poster_path: poster,
      backdrop_path: backdrop,
      original_language: languageId
  } = movie || {};

  let genresNames;
  
  useEffect(() => {
    if (!movie) {
      fetchRandomMovie();
    }
  }, [])
  
  if (movie){
    console.log('MOVIE INSIDE RANDOM', movie)
    genresNames = genres.map(({ name }) => name);
  }

  return (
    <StyledRandomPage page={0}>
      <button className='generator' onClick={fetchRandomMovie}>
        ain't hungry yet
      </button>
      {movie && 
      <div className='movie'>
        <h2 className='title'>
            {title || ''} &#8226;
            <span className='year'>{`   (${releaseDate.substr(0,4)})  `}</span>&#8226;
            <span className='rating'>{`  ${ratings}` || ''} &#9733;{' '} </span>&#8226;
            <span className='language'>{`  ${languages[languageId]}`}</span>
            <p className='genres'>{genresNames.join(', ')}</p>
        </h2>
        <div className='imgContainer'>
            {/* <img src={`https://image.tmdb.org/t/p/w300/${poster}`}/> */}
            <Img 
              className='img'
              src={[
                `https://image.tmdb.org/t/p/w300/${poster}`,
              ]}
              loader={<ClipLoader size={50} color={"#123abc"} />}
              unloader={<img src={'../../assets/unfound.jpg'} />}
            />
        </div> 
        <div className='content'>
            <p className='overview'>Overview<span>{overview || ''}</span></p>
        </div>
      </div>}
    </StyledRandomPage>













      // {/* <StyledTitle className='random__heading'>a random appetizer</StyledTitle> */}
      
      // {/* {movie && (
      //   <MovieItem movie={movie} className='random' />
      // )} */}
  );
}

const mapStateToProps = createStructuredSelector({
    movie: selectRandomMovie,
    languages: selectLanguageList,
    // genres: selectGenreList
});

export default connect(mapStateToProps, { fetchRandomMovie })(Random);
