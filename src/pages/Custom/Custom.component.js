import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMoviesByCriteria } from '../../redux/movies/movies.selector';

import { fetchMoviesByCriteria } from '../../redux/movies/movies.actions';

import MoviesByCriteriaForm from '../../components/MoviesByCriteriaForm';
import MovieItem from '../../components/MovieItem/MovieItem.component';

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
        this.setState(prevState =>  ({
                isFormVisible: !prevState.isFormVisible
        }));
    }

    onSubmit = ( formValues ) => {
        const { genre, language, year, voteAverage, withKeywords } = formValues;
        console.log('FORM VALUES', formValues);
        // debugger;
        this.props.fetchMoviesByCriteria(formValues, true);
        this.toggleForm();
    }

    componentDidMount() {
        this.setState(prevState => {
            return {
                isFormVisible: true
            }
        });
    }

    render() {
        return (
            <div className="custom">
                <div className={`custom__form-container ${this.state.isFormVisible ? ' custom__form-container--visible' : ''}`}>
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


const mapStateToProps = createStructuredSelector({
    movies: selectMoviesByCriteria
});

export default connect(mapStateToProps, { fetchMoviesByCriteria })(Custom);