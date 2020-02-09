import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGenreList, fetchLanguageList } from "../actions";
import Dropdown from "./Dropdown";

// import '../CSS/Sidebar.css';

class Sidebar extends Component {
  componentDidMount() {
    this.props.fetchGenreList();
    this.props.fetchLanguageList();
  }

  render() {
    //   console.group(this.props.genres.length)
    //doesnt nessecarily have to be here
    return (
      <div className="sidebar">
        <div className="sidebar__menu">
          <h2 className="sidebar__heading">Navigate Yourself</h2>
          <div className="sidebar__link-container">
            <Link to="/" className="sidebar__link">Appetizer</Link>
          </div>
          <div className="sidebar__link-container">
            <Link to="/best" className="sidebar__link">All Time Best</Link>
          </div>
          <div className="sidebar__link-container">
            <Link to='/explore' className="sidebar__link">Explore By Genre</Link>
          </div>
          <div className="sidebar__link-container">
            <Link to="/custom" className="sidebar__link">Custom Search</Link>
            {/* {this.props.match} */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE FROM HEADEr", state);
  return {
    genres: state.genres.genres
  }; //NOT SURE HEADER SHOUDL BE CONNECTED TO
};

export default connect(mapStateToProps, { fetchGenreList, fetchLanguageList })(
  Sidebar
);
