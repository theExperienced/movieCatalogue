import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';

import { fetchLanguages } from './redux/languages/languages.actions';
import { fetchGenres } from './redux/genres/genres.actions';
import { selectGenreList } from './redux/genres/genres.selector';
import { fetchMoviesByGenre } from './redux/movies/movies.actions';
import { selectCurrentTheme } from './redux/theme/theme.selector';
import { selectIsActive } from './redux/modal/modal.selector';

import Random from './pages/Random/Random.component';
import BestMovies from './pages/BestMovies';
import Explore from './pages/Explore';
import Custom from './pages/Custom/Custom.component';

import Sidebar from './components/Sidebar/Sidebar.component';
import Modal from './components/Modal/Modal.component';

import { themes } from "./GlobalStyle";
import { StyledApp, StyledContainer } from './App.style';

const App = ({ fetchLanguages, fetchGenres, currentTheme, isModalActive }) => { 
  useEffect(() => {
    fetchLanguages();
    fetchGenres();
  }, []);

  return (
        
    <StyledApp>  
      <ThemeProvider theme={themes[currentTheme]}>     
        <Router>
          <Sidebar /> 
          <StyledContainer>
            {isModalActive && <Modal />}
            <Switch>
              <Route exact path='/' component={Random}></Route>
              <Route exact path='/best' component={BestMovies}></Route>
              <Route exact path='/explore' component={Explore}></Route>
              <Route exact path='/custom' component={Custom}></Route>
            </Switch>
          </StyledContainer>
        </Router>
      </ThemeProvider>
    </StyledApp>
    
  );
}

const mapStateToProps = createStructuredSelector({
  currentTheme: selectCurrentTheme,
  genres: selectGenreList,
  isModalActive: selectIsActive
});

const mapDispatchToProps = dispatch => ({
  fetchLanguages: () => dispatch(fetchLanguages()),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchMoviesByGenre: (genreId, page) => dispatch(fetchMoviesByGenre(genreId, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
