import React, { Component, useEffect } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchMoviesByCriteria } from '../../redux/movies/movies.actions';

import Dropdown from '../Dropdown';
import DropdownList from 'react-widgets/lib/DropdownList'
import ReactDropdown from '../ReactDropdown/ReactDropdown.component';
import { selectLanguageList } from '../../redux/languages/languages.selector';
import { selectGenreList } from '../../redux/genres/genres.selector';
import { selectForm } from '../../redux/form/form.selector';
import { createStructuredSelector } from 'reselect';

import { StyledContainer, StyledForm, StyledGroup } from './CustomForm.style';

const renderSelect = ({ options, purpose, input, ...formProps }) => {           //not sure formpropess is needed
    console.log('RENDERING SELECT OF CRITERIA', options)
    return (
       <select { ...input }>{/* defaultValue={label === 'Languages' ? 'en' : 35}>*/}
           {renderOptions(options, purpose)}
       </select>
    );
}

const renderOptions = (options, purpose) => {
    let processedOptions = Object.entries(options).map(([value, option]) => {
        return <option value={value}>{option}</option>             
    });
    processedOptions.unshift(<option value=''>{`Select a ${purpose}..`}</option>)
    return processedOptions;
}

const onSelectChange = formProps => value => formProps.input.onChange(value);

const renderInput = ({ input, label, placeholder, type, meta,  meta: { active, error, touched, visited } }) => {
    console.log('METAMEATMETAMETA', meta);
    const className = '' 
    return (
        <StyledGroup>
            {/* <label>{label}</label> */}
            <input { ...input } autoComplete='off' placeholder={placeholder} type={type}/>
            {error && touched && !active && renderError(error)}
        </StyledGroup>
    );
}

const renderError = (error) => {
    return (
        <div className='ui error message'>
            <div className='header'>{error}</div>
        </div>
    );
}




const CustomForm = ({ form, handleSubmit, mySubmit, className, genres, languages, reset, pristine, submitting, onFormToggleClick }) => {
    useEffect(() => {
        console.log('EFECTING FROM CUSTOM FORM', form)
        return () => {
            
        }
    })

    // const mySubmit = () => {
    //     console.log('SUBMITTED')
    //     onFormToggleClick();
    //     reset();
    // }

    // const onSubmit = (formValues) => {
    //     console.group('SUBMITTED');
    // };

    const innerSubmit = formValues => {
        mySubmit(formValues);
        reset();
    }

    return (
            <StyledForm className={`${className}__form`} onSubmit={handleSubmit}>
                {/* <Field name='genre' component={renderSelect} options={genres} purpose='genres' />  */}
                {/* <Field name='language' component={renderSelect} options={languages} purpose='languages' />  */}


                {/* <Field name='genres' component={ReactDropdown} optVals={genres} purpose={'genre'} onChange={onSelectChange}/>
                <Field name='languages' component={ReactDropdown} optVals={languages} purpose={'language'} onChange={onSelectChange}/> */}

                {/* <Field name='genres' component={DropdownList} data={Object.values(genres)} valueField='value' textField='color'/> */}

                <Field name='with_genres' component={renderSelect} defaultValue={35} purpose='genre' options={genres} />
                <Field name='language' component={renderSelect} purpose='language' options={languages} />

                <Field name='year' type='number' component={renderInput} placeholder='Year'/> 
                <Field name='vote_average' type='number' component={renderInput} placeholder='Rated at least'/>       
                {/* <Field name='with_keywords' type='text' component={renderInput} placeholder='With keywords'/>  */}
                <button type='submit' disabled={pristine || submitting}>Go</button>   
                <button disabled={pristine || submitting} onClick={reset}>Clear</button>     
            </StyledForm>
    );
}


const mapStateToProps = createStructuredSelector({
    genres: selectGenreList,
    languages: selectLanguageList,
    form: selectForm
});

const validate = (values) => {
    console.log('values from form validate',values)
    const errors = {};

    if (!values.year) {
        errors.year = 'Required';
    }else if (values.year.length !== 4 || values.year > new Date().getFullYear() || values.year < 1900) {
        errors.year = 'Any year later than 1900 and earlier than the current';
    }

    if (!values.voteAverage) {
        errors.voteAverage = 'Required';
    }else if (values.voteAverage < 0 || values.voteAverage > 10) {
        errors.voteAverage = 'Must be between 1 to 10';
    }
    
    return errors;
}

const WrappedCustomForm = connect(mapStateToProps, { fetchMoviesByCriteria })(CustomForm);

export default reduxForm({
    form: 'CustomForm',
    initialValues: {
        // with_genres: 35,
        // language: 'en'  
    },
    destroyOnUnmount: false,
    // values: {genre: '12'},
    validate
})(WrappedCustomForm);
