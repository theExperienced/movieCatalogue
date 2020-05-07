import React, { useEffect } from 'react';     ///////DELETE USEEFFECT
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { closeModal } from '../../redux/modal/modal.actions';
import { selectIsActive, selectMovie } from '../../redux/modal/modal.selector';
import { selectLanguageList } from '../../redux/languages/languages.selector';

import { StyledModal } from './Modal.style';

const Modal = ({ movie, isActive, closeModal, languages }) => {
    const {
        title,
        overview,
        vote_average: ratings,
        release_date: releaseDate,
        poster_path: poster,
        backdrop_path: backdrop,
        original_language: languageId
    } = movie || {};

    useEffect(() => {
        
    });

    const className = 'kaki';
    const onClick = () => {
        closeModal();
    }

    return (
        isActive ? 
        <StyledModal isActive={isActive}>
            <button className='exit' onClick={onClick}>&#x274C;</button>
            <div className='content'>
                <h2 className='title'>{title || ''}</h2>
                <p className='overview'>{overview || ''}</p>
                <p className='rating'>{ratings || ''} &#9733;</p>
                <p className='release'>{releaseDate.substr(0, 4) || ''}</p>
                <p className='language'>{languages[languageId]}</p>
            </div>
            {/* <div className={`${className || ''}__img-container`}>
                <img src={`https://image.tmdb.org/t/p/w200/${poster}`} className={`${className || ''}__img`}/>
            </div>  */}
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
    languages: selectLanguageList
});


const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())                       //BE THOGHTFUL OF THE OPTION TO CLOSE WHEN CLICKING ON SIDEBAR
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
