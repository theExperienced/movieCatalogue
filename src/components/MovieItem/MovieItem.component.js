import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { openModal } from '../../redux/modal/modal.actions';

import { StyledItem } from './MovieItem.style';
import { selectLanguageList } from '../../redux/languages/languages.selector';

const MovieItem = ({ isListItem, movie, className, languages, openModal }) => {

    const {
        title,
        overview,
        vote_average: ratings,
        release_date: releaseDate,
        poster_path: poster,
        backdrop_path: backdrop,
        profile_path: profile,
        original_language: languageId
    } = movie;
  
    //maybe backdroppath instead of poster path
    // let {
    //   movie: {
    //     title,
    //     overview,
    //     vote_average: ratings,
    //     release_date: releaseDate,
    //     poster_path: poster,
    //     original_language: languageId
    //   },
    //   className,
    //   languages
    // } = this.props;
    
    console.log('PROPS FROM INSDIDE MOVIE ITEM', isListItem)

  // const languageUnabrreviated = languages.filter(
  //   language => language.value === languageId
  // )[0].title;

 

  const onClick = () => {
    if (isListItem)  {                          //maybe theres a better way to do this without conditional
      console.log('CLICKED ON MOVIE ITEM')
      openModal(movie);
    }
  } 

  return (
    <StyledItem className={`${className}__item`} onClick={onClick} isListItem>
    
      {
        isListItem                        ?
                     
    <>
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} className={`${className}__img`}/> {/*maybe just set the backgonr as img instead of img el*/}
        <div>
          <h3>{title}</h3>
          {/* <p>{releaseDate}</p> */}
        </div>
    </>
                                         :

      <>
      <div className={`${className}__info`}>
        <h2>{title}</h2>
        <p>{overview}</p>
        <p>Ratings: {ratings}</p>
        <p>Release Date: {releaseDate}</p>
        <p>Language: {languages[languageId]}</p>
      </div>
      <div className={`${className}__img-container`}>
        <img src={`https://image.tmdb.org/t/p/w200/${poster}`} className={`${className}__img`}/>
      </div> 
      </> 


      }
    </StyledItem>
  );
}


const mapStateToProps = createStructuredSelector({
    languages: selectLanguageList
});

const mapDispatchToProps = dispatch => ({
    openModal: movie => dispatch(openModal(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
