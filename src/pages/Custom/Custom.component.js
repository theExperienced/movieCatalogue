import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMoviesByCriteria } from '../../redux/movies/movies.selector';

import { fetchMoviesByCriteria } from '../../redux/movies/movies.actions';
import { updateFormValues, resubmit } from '../../redux/form/form.actions';
import { selectForm, selectFormValues } from '../../redux/form/form.selector';

import CustomForm from '../../components/CustomForm/CustomForm.component';
import { CriteriaMovieList } from '../../components/MovieList/MovieList.component';
import MovieItem from '../../components/MovieItem/MovieItem.component';
import { StyledPage } from '../../GlobalStyle';
import { StyledFormContainer } from './Custom.style';

import { ListTokens } from '../../components/MovieList/MovieList.component';







const Custom = props => {
    const { data, onSubmit, formValues } = props;
    const [ isFormVisible, setIsFormVisible ] = useState(true);
    const [ hasSubmitted, setHasSubmitted ] = useState(false);
    const [ valuesChanged, setValuesChanged ] = useState(false);
    // const [ formValues, setFormValues ] = useState(null);

    const handleFormToggleClick = () => {
        toggleForm();                                              ////////PROBABLY NOT NEEDED
    }

    const toggleForm = () => {
        setIsFormVisible(prevState => !prevState);
    }

    const handleSubmit = formValues => {
        setIsFormVisible(prevState => false);
        setHasSubmitted(prevState => true);
        resubmit(true);
        // setFormValues(prevState => formValues);
        setValuesChanged(true);
    }

    const setValuesUnchanged = () => {
        setValuesChanged(false);
    }
    
    console.log('CHECKING FORM VALUE SINSIDE CUSTOM', valuesChanged)
    return (
        <StyledPage>
            <StyledFormContainer isVisible={isFormVisible}>
                <button className="custom__form-toggle" onClick={toggleForm}>
                    &#128269;
                </button>
                <CustomForm onSubmit={handleSubmit} className="custom"/>
            </StyledFormContainer>        
            {(hasSubmitted || data) && <CriteriaMovieList values={formValues} valuesChanged={valuesChanged} setValuesUnchanged={setValuesUnchanged} token={ListTokens.CRITERIA} fetcher={fetchMoviesByCriteria} selector={selectMoviesByCriteria} />}
        </StyledPage>
    );
}

const mapStateToProps = createStructuredSelector({
    data: selectMoviesByCriteria,
    formValues: selectFormValues
});

export default connect(mapStateToProps, { fetchMoviesByCriteria })(Custom);