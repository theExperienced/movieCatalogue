import React, { useEffect } from 'react';     ///////DELETE USEEFFECT
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { closeModal } from '../../redux/modal/modal.actions';
import { selectIsActive, selectMovie } from '../../redux/modal/modal.selector';
import { selectLanguageList } from '../../redux/languages/languages.selector';
import { selectGenreList } from '../../redux/genres/genres.selector';

import Img from 'react-image';
import ClipLoader from "react-spinners/ClipLoader";

import { StyledModal } from './Modal.style';

const Modal = ({ movie, isActive, closeModal, languages, genres }) => {
    console.log('movie from modal', movie)
    const {
        title,
        genre_ids: genresIds,
        overview,
        vote_average: ratings,
        release_date: releaseDate,
        poster_path: poster,
        backdrop_path: backdrop,
        original_language: languageId
    } = movie || {};

    const genresNames = genresIds.map(id => genres[id]);
    // const preProcess = () => {

    // }
    // let ownGenres;

    useEffect(() => {
        // ownGenres = genreIds.map(id => genres[id]);
    });

    const className = 'kaki';
    const onClick = () => {
        closeModal();
    }

    return (
        isActive ? 
        <StyledModal isActive={isActive} backdrop={backdrop}>
            <button className='exit' onClick={onClick}>&#x274C;</button>
            
            <h2 className='title'>
                {title || ''} 
                <span className='year'>{`  (${releaseDate.substr(0,4)})  `}</span>
                <span className='rating'>{`${ratings}` || ''} &#9733;{' '} </span>
                <span className='language'>{languages[languageId]}</span>
                <p className='genres'>{genresNames.join(', ')}</p>
            </h2>
            <div className='imgContainer'>
                {/* <img src={`https://image.tmdb.org/t/p/w300/${poster}`} className='img'/> */}
                <Img 
                    className='img'
                    src={[
                        `https://image.tmdb.org/t/p/w300/${poster}`,
                    ]}
                    loader={<ClipLoader size={50} color={"#123abc"} />}
                    unloader={'../../assests/unfound.jpg'}
                />
            </div> 
            <div className='content'>
                <p className='overview'>Overview<span>{overview || ''}</span></p>
            </div>
            
        </StyledModal> :
        null
        
        
    );
}

// const mapStateToProps = createStructuredSelector({
//     // isActive: selectIsActive,
//     movie: selectMovie
// });

const mapStateToProps = createStructuredSelector({
    isActive: selectIsActive,
    movie: selectMovie,
    languages: selectLanguageList,
    genres: selectGenreList
});


const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())                       //BE THOGHTFUL OF THE OPTION TO CLOSE WHEN CLICKING ON SIDEBAR
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
