import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Random from "./Random";
import BestMovies from "./BestMovies";
import Explore from "./Explore";
import Custom from "./Custom";
import { connect } from "react-redux";
import { fetchGenreList } from "../actions";

import api from "../api/api";
import '../styles/App.css';

class App extends Component {
  //   async fetch() {
  //     const result = await api.get(
  //       "/550?api_key=55881c34587ea582a685d26399d1be47"
  //     );
  //     console.log(result);
  //   }

  render() {
    // this.fetch();
    return (
      <div className="body">
        <Router>
          <Sidebar />
          <div className="main-container">
          <Switch>
            <Route path="/" component={Random} exact></Route>
            <Route path="/best" component={BestMovies} exact></Route>
            <Route path="/explore" component={Explore} exact></Route>
            <Route path="/custom" component={Custom} exact></Route>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null)(App);
