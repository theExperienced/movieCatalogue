import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleTheme } from '../../redux/theme/theme.actions';

import { StyledSidebar, StyledToggle, StyledTitle, StyledMenu, StyledItem, StyledLink } from './Sidebar.style';

const Sidebar = ({ toggleTheme }) => {
    const onClick = () => {
      toggleTheme();
    }

    return (
      <StyledSidebar>
        <StyledToggle onClick={onClick}></StyledToggle>
        <StyledTitle>Navigate Yourself</StyledTitle>
        <StyledMenu>
          <StyledItem>
            <StyledLink to='/'>Appetizer</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to='/best'>All Time Best</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to='/explore'>Explore By Genre</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to='/custom'>Custom Search</StyledLink>
            {/* {this.props.match} */}
          </StyledItem>
        </StyledMenu>
      </StyledSidebar>
    );
}


const mapStateToProps = state => ({
    genres: state.genres.genres
});

export default connect(mapStateToProps, { toggleTheme })(Sidebar);
