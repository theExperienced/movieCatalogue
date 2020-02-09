import React, { Component } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import Dropdown from './Dropdown';
import { connect } from 'react-redux';
import { fetchMoviesByCriteria } from '../actions';


class MoviesByCriteriaForm extends Component {

    renderSelect = formProps => {           //not sure formpropess is needed
        console.log('RENDERING SELECT OF CRITERIA', formProps)
        return (
            <Dropdown options={this.props.genres} purpose='Genres' onChange={value => formProps.input.onChange(value)}/>
        );
    }

    onSelectGenre = value => {


    }

    renderInput = formProps => {
        const {input, label, type, meta} = formProps;
        const className = '' 
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' type={type}/>
                <div>{this.renderError(meta)}</div>
            </div>
        );
    }

    renderError = ({error, touched}) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }


    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
           
                <Form className={`${this.props.className}__form`} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                   <Field name="with_genres" component={this.renderSelect}/> 
                   <Field name="language" type="text" component={this.renderInput} label="Enter Language"/> 
                   <Field name="year" type="number" component={this.renderInput} label="Enter Year"/> 
                   <Field name="vote_average" type="number" step="0.01" component={this.renderInput} label="Minimum Ratings"/>        {/*maybe step is not nessecary */}
                   <Field name="with_keywords" type="text" component={this.renderInput} label="With Keywords"/> 
                   <button>Go</button>
                </Form>
        )
    }
}


const mapStateToProps = state => {
    return {
        genres: state.genres.genres
    }
}

const validate = formValues => {
    const errors = {};
    return errors;
}

const WrappedMoviesByCriteriaForm = connect(mapStateToProps, {
    fetchMoviesByCriteria
})(MoviesByCriteriaForm);

export default reduxForm({
    form: 'MovieByCriteriaForm',
    values: {genre: '12'},
    validate
})(WrappedMoviesByCriteriaForm);
