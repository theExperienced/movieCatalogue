import React, { Component } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchMoviesByCriteria } from '../redux/movies/movies.actions';

import Dropdown from './Dropdown';

const MoviesByCriteriaForm = ({ handleSubmit, className, genres, languages, reset, pristine, submitting }) => {
    const renderSelect = ({ options, purpose, ...formProps }) => {           //not sure formpropess is needed
        console.log('RENDERING SELECT OF CRITERIA', options)
        return (
            <Dropdown options={options} purpose={purpose} onChange={value => formProps.input.onChange(value)}/>
        );
    }

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
            <Field name='genre' component={renderSelect} options={genres} purpose='genres' /> 
            <Field name='language' component={renderSelect} options={languages} purpose='languages' /> 
            <Field name='year' type='number' component={renderInput} label='Enter Year'/> 
            <Field name='voteAverage' type='number' step='0.01' component={renderInput} label='Minimum Ratings'/>        {/*maybe step is not nessecary */}
            <Field name='withKeywords' type='text' component={renderInput} label='With Keywords'/> 
            <button type='submit' disabled={pristine || submitting}  onClick={reset}>Go</button>       {/*onClick={reset}*/}
        </Form>
    );
}


const mapStateToProps = ({ genres, languages }) => {
    console.log('languagessssssssss932748275892759827359827395', languages, genres)
    return {
        genres: genres.genresList,
        languages: languages.languageList
    }
}

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
