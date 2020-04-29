import React, { Component } from "react";
import { connect } from "react-redux";

const MovieItem = ({ movie: {
                   title,
                   overview,
                   vote_average: ratings,
                   release_date: releaseDate,
                   poster_path: poster,
                   original_language: languageAbbreviated
                   },
                   className,
                   languages }) => {
  
    //maybe backdroppath instead of poster path
    // let {
    //   movie: {
    //     title,
    //     overview,
    //     vote_average: ratings,
    //     release_date: releaseDate,
    //     poster_path: poster,
    //     original_language: languageAbbreviated
    //   },
    //   className,
    //   languages
    // } = this.props;

  const languageUnabrreviated = languages.filter(
    language => language.value === languageAbbreviated
  )[0].title;

  return (
    <div className={`${className}__item`}>
      <div className={`${className}__info`}>
        <h2>{title}</h2>
        <p>{overview}</p>
        <p>Ratings: {ratings}</p>
        <p>Release Date: {releaseDate}</p>
        <p>Language: {languageUnabrreviated}</p>
      </div>
      <div className={`${className}__img-container`}>
        <img src={`https://image.tmdb.org/t/p/w200/${poster}`} className={`${className}__img`}/>
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    languages: state.languages.languageList
  };
};

export default connect(mapStateToProps)(MovieItem);
