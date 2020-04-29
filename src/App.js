import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';

import { fetchLanguages } from './redux/languages/languages.actions';
import { fetchGenres } from './redux/genres/genres.actions';
import { selectCurrentTheme } from './redux/theme/theme.selectors';

import Random from './pages/Random/Random.component';
import BestMovies from './pages/BestMovies';
import Explore from './pages/Explore';
import Custom from './pages/Custom/Custom.component';

import Sidebar from './components/Sidebar/Sidebar.component';

import { themes } from "./GlobalStyle";
import { StyledApp } from './App.style';

class App extends Component {
  componentDidMount() {
    const { fetchLanguages, fetchGenres } = this.props;
    
    fetchLanguages();
    fetchGenres();
    console.log('FIRST PROPS FORM APP',this.props)
  }

  render() {
    const { currentTheme } = this.props;

    return (
      <ThemeProvider theme={themes[currentTheme]}>     {/*change theme to concrete one*/}
        <StyledApp>
          <Router>
            <Sidebar />
            <div className='main-container'>
              <Switch>
                <Route exact path='/' component={Random}></Route>
                <Route exact path='/best' component={BestMovies}></Route>
                <Route exact path='/explore' component={Explore}></Route>
                <Route exact path='/custom' component={Custom}></Route>
              </Switch>
            </div>
          </Router>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentTheme: selectCurrentTheme
});

const mapDispatchToProps = dispatch => ({
  fetchLanguages: () => dispatch(fetchLanguages()),
  fetchGenres: () => dispatch(fetchGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
