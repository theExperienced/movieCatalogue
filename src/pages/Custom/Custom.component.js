import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMoviesByCriteria } from '../../redux/movies/movies.selector';

import { fetchMoviesByCriteria } from '../../redux/movies/movies.actions';
import { resubmit } from '../../redux/form/form.actions';
import { selectFormValues } from '../../redux/form/form.selector';

import CustomForm from '../../components/CustomForm/CustomForm.component';
import { CriteriaMovieList } from '../../components/MovieList/MovieList.component';
import { StyledPage } from '../../GlobalStyle';
import { StyledFormContainer } from './Custom.style';

import { ListTokens } from '../../components/MovieList/MovieList.component';

const Custom = props => {
    const { data, formValues } = props;
    const [ isFormVisible, setIsFormVisible ] = useState(true);
    const [ hasSubmitted, setHasSubmitted ] = useState(false);
    const [ valuesChanged, setValuesChanged ] = useState(false);
     
    const toggleForm = () => {
        setIsFormVisible(prevState => !prevState);
    }

    const handleSubmit = formValues => {
        setIsFormVisible(prevState => false);
        setHasSubmitted(prevState => true);
        resubmit(true);
        setValuesChanged(true);
    }

    const setValuesUnchanged = () => {
        setValuesChanged(false);
    }
    
    return (
        <StyledPage page={3}>
            <StyledFormContainer isVisible={isFormVisible}>
                <button className="custom__form-toggle" onClick={toggleForm}>
                    &#128269;
                </button>
                <CustomForm onSubmit={handleSubmit} className="custom"/>
            </StyledFormContainer>     
            <h1 className='title'>Fine tuned</h1>   
            {(hasSubmitted || data) && 
            <CriteriaMovieList 
                values={formValues} 
                valuesChanged={valuesChanged} 
                setValuesUnchanged={setValuesUnchanged} 
                token={ListTokens.CRITERIA} 
                fetcher={fetchMoviesByCriteria} 
                selector={selectMoviesByCriteria} 
            />}
        </StyledPage>
    );
}

const mapStateToProps = createStructuredSelector({
    data: selectMoviesByCriteria,
    formValues: selectFormValues
});

export default connect(mapStateToProps, { fetchMoviesByCriteria })(Custom);