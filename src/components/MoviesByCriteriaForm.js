import React, { Component } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchMoviesByCriteria } from '../redux/movies/movies.actions';

import Dropdown from './Dropdown';
import ReactDropdown from './ReactDropdown/ReactDropdown.component';
import { selectLanguageList } from '../redux/languages/languages.selector';
import { selectGenreList } from '../redux/genres/genres.selector';
import { createStructuredSelector } from 'reselect';

const MoviesByCriteriaForm = ({ handleSubmit, onSubmit, className, genres, languages, reset, pristine, submitting }) => {
    const renderSelect = ({ options, purpose, ...formProps }) => {           //not sure formpropess is needed
        console.log('RENDERING SELECT OF CRITERIA', options)
        return (
            <Dropdown options={options} purpose={purpose} onChange={value => formProps.input.onChange(value)}/>
        );
    }

    const onSelectChange = formProps => value => formProps.input.onChange(value);

    const renderInput = ({ input, label, type, meta: { active, error, touched } }) => {
        const className = '' 
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' type={type}/>
                <div>{active && renderError({ meta: {error, touched}})}</div>
            </div>
        );
    }

    const renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            );
        }
    }


    // const onSubmit = (formValues) => {
    //     onSubmit(formValues);
    // };

    return (
        <Form className={`${className}__form`} onSubmit={handleSubmit}>
            {/* <Field name='genre' component={renderSelect} options={genres} purpose='genres' />  */}
            {/* <Field name='language' component={renderSelect} options={languages} purpose='languages' />  */}
            <ReactDropdown optVals={genres} purpose={'genre'} onChange={onSelectChange}/>
            <ReactDropdown optVals={languages} purpose={'language'} onChange={onSelectChange}/>
            <Field name='year' type='number' component={renderInput} label='Enter Year'/> 
            <Field name='voteAverage' type='number' component={renderInput} label='Minimum Ratings'/>       
            <Field name='withKeywords' type='text' component={renderInput} label='With Keywords'/> 
            <button type='submit' disabled={pristine || submitting}  onClick={reset}>Go</button>     
        </Form>
    );
}


const mapStateToProps = createStructuredSelector({
    genres: selectGenreList,
    languages: selectLanguageList,
});

const validate = ({ ...values }) => {
    // console.log('values from form validate',values)
    const errors = {};

    if (String(values.year).length !== 4 || values.year > new Date().getFullYear()) {
        errors.year = 'big year';
    }

    
    return errors;
}

const WrappedMoviesByCriteriaForm = connect(mapStateToProps, { fetchMoviesByCriteria })(MoviesByCriteriaForm);

export default reduxForm({
    form: 'MovieByCriteriaForm',
    values: {genre: '12'},
    validate
})(WrappedMoviesByCriteriaForm);
