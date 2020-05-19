import React, { useState, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { openModal } from '../../redux/modal/modal.actions';

import Img from 'react-image';
import ClipLoader from "react-spinners/ClipLoader";

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
  
  const onClick = () => {
    if (isListItem)  {  
      openModal(movie);
    }
  } 

  const observer = useRef();
  const itemRef = useCallback(item => {
    if (observer.current) 
      observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isImgLoaded) {
        setIsImgLoaded(true);
      }
    }, {rootMargin: '300px'});
    if (item) observer.current.observe(item)
  }, [isImgLoaded])  

  const fallbackImage = () => {
    return <img src={require('../../assets/unfound.jpg')} />
  }

  const renderItemImg = () => {
  console.log('RENDERING ITEM IMAGE');
  return isImgLoaded ?
    <img src={`https://image.tmdb.org/t/p/w500/${poster}`} onError={fallbackImage}/>
        :
    null 
  }

  return (
    <StyledItem className={`${className}__item`} onClick={onClick} isListItem ref={itemRef}>
    
      {/* {
        isListItem                        ? */}
                     
    
      {renderItemImg()} 
      <div>
        <h3>{title}</h3>
      </div>
    
                                         {/* : */}

      {/* <>
      <div className={`${className}__info`}>
        <h2>{title}</h2>
        <p>{overview}</p>
        <p>Ratings: {ratings}</p>
        <p>Release Date: {releaseDate}</p>
        <p>Language: {languages[languageId]}</p>
      </div>
      <div className={`${className}__img-container`}>
        <Img 
            className='img'
            src={[
                `https://image.tmdb.org/t/p/w200/${poster}`,
            ]}
            loader={<ClipLoader size={50} color={"#123abc"} />}
            unloader={<img src={require('../../assets/unfound.jpg')} />}
        />
      </div>
      </>  */}
      
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
