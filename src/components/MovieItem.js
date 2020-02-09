import React, { Component } from "react";
import { connect } from "react-redux";

export class MovieItem extends Component {
  componentDidMount() {}
  render() {
    //maybe backdroppath instead of poster path
    let {
      title,
      overview,
      vote_average: ratings,
      release_date: releaseDate,
      poster_path: poster,
      original_language: languageAbbreviated
    } = this.props.movie;

    const languageUnabrreviated = this.props.languageList.filter(
      language => language.iso === languageAbbreviated
    )[0].englishName;
    return (
      <div className={`${this.props.className}__item`}>
        <div className={`${this.props.className}__info`}>
          <h2>{title}</h2>
          <p>{overview}</p>
          <p>Ratings: {ratings}</p>
          <p>Release Date: {releaseDate}</p>
          <p>Language: {languageUnabrreviated}</p>
        </div>
        <div className={`${this.props.className}__img-container`}>
          <img src={`https://image.tmdb.org/t/p/w200/${poster}`} className={`${this.props.className}__img`}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    languageList: state.languages.languages
  };
};

export default connect(mapStateToProps)(MovieItem);
