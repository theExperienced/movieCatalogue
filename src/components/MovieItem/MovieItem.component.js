import React, { useState, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { openModal } from '../../redux/modal/modal.actions';

import { StyledItem } from './MovieItem.style';
import { selectLanguageList } from '../../redux/languages/languages.selector';

const MovieItem = ({ isListItem, movie, className, languages, openModal }) => {
    const [ isImgLoaded, setIsImgLoaded] = useState(false);

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
    

  // const languageUnabrreviated = languages.filter(
  //   language => language.value === languageId
  // )[0].title;

 

  const onClick = () => {
    if (isListItem)  {                          //maybe theres a better way to do this without conditional
      openModal(movie);
    }
  } 

  
  const observer = useRef();
  const itemRef = useCallback(item => {
    // if (loading) return
    if (observer.current) 
      observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isImgLoaded) {
        setIsImgLoaded(true);
      }
    }, {rootMargin: '300px'});
    if (item) observer.current.observe(item)
  }, [isImgLoaded])  

  const renderItemImg = () => {
    console.log('RENDERING ITEM IMAGE');
    return isImgLoaded ?
      <img src={`https://image.tmdb.org/t/p/w500/${poster}`} className={`${className}__img`}/>
         :
      null 
  }

  return (
    <StyledItem className={`${className}__item`} onClick={onClick} isListItem ref={itemRef}>
    
      {
        isListItem                        ?
                     
    <>
    {renderItemImg()} {/*maybe just set the backgonr as img instead of img el*/}
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
    openModal: (movie, sectionNum) => dispatch(openModal(movie, sectionNum))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
