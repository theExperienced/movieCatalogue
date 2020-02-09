import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopMovies } from '../actions';



export class TopRated extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { fetchTopMovies })(TopRated);
