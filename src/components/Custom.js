import React, { Component } from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import MovieItem from './MovieItem';
import { connect } from 'react-redux';
import { fetchMoviesByCriteria } from '../actions';
import MoviesByCriteriaForm from './MoviesByCriteriaForm';


export class Custom extends Component {
    state = {
        page: 1,
        isFormVisible: false
    }

    renderMovieList = () => {
        console.log('PROPS FROM Custom', this.props)
        if (this.props.movies.movies.length) {
        return this.props.movies.movies.map(movie => 
          <MovieItem movie={movie} />
        );
        }
      };

      onFormToggleClick = () => {
          this.toggleForm();
      }

      onCustomClick = e => {
        //   if (this.state.isformVisible && e.)
        //   this.toggleForm();
      }

      toggleForm = () => {
          
        this.setState(prevState =>  {
            return {
                isFormVisible: !prevState.isFormVisible
        }});
      }

    onSubmit = formValues => {
        // debugger;
        this.props.fetchMoviesByCriteria(formValues, true);
        this.toggleForm();
    }

    componentDidMount() {
        this.setState(prevState => {
            return {
                isFormVisible: true
            }
        })
    }

    render() {
        return (
            <div className="custom">
            <div className={`custom__form-container${this.state.isFormVisible ? ' custom__form-container--visible' : ''}`}>
            <MoviesByCriteriaForm onSubmit={this.onSubmit} className="custom"/>
            
            <button className="custom__form-toggle" onClick={this.onFormToggleClick}>
            <span className="custom__form-toggle--left"></span><span className="custom__form-toggle--right"></span>
            </button>
            </div>
            
                {this.props.movies && this.renderMovieList()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    // debugger;
    return {
        movies: state.movies.moviesByCriteria
    }
}

export default connect(mapStateToProps, {
    fetchMoviesByCriteria
})(Custom);