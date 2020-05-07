import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { toggleTheme } from '../../redux/theme/theme.actions';
import { selectGenreList } from '../../redux/genres/genres.selector';
import { closeModal } from '../../redux/modal/modal.actions';
import { selectIsActive } from '../../redux/modal/modal.selector';

import { StyledSidebar, StyledToggle, StyledTitleContainer, StyledTitle, StyledMenu, StyledItem, StyledLink } from './Sidebar.style';
import SidebarLink from '../SidebarLink/SidebarLink.component';

const Sidebar = ({ toggleTheme, isModalOpen, closeModal }) => {
  const [ currPage, setCurrPage ] = useState(0);
  // const [ prevPage, setPrevPage ] = useState(0);

  const pageTos = ['/', '/best', '/explore', '/custom'];
  const pageTitles = ['Appetizer', 'Top 1\'s', 'By Genre', 'Custom'];

    const onThemeClick = () => {
      toggleTheme();
    }

    const onLinkClick = pageNum => {
      setCurrPage(pageNum);
      closeModal();
    }

    const renderMenuItems = () => {
      let items = new Array(4)

      for (let i = 0; i < items.length; i++) {
        const element = items[i] = 
        <StyledItem>
          <StyledLink to={pageTos[i]} onClick={() => onLinkClick(i)} pageNum={i} isActive={currPage === i}>{pageTitles[i]}</StyledLink>
        </StyledItem>;
      }

      return items;
    }

    return (
      <StyledSidebar>
        <StyledTitleContainer>
        <StyledToggle onClick={onThemeClick}></StyledToggle>
          <StyledTitle>Movie<br/>Guide</StyledTitle>
        </StyledTitleContainer>
        <StyledMenu activePage={currPage}>

        {renderMenuItems()}
          {/* <StyledItem>
            <StyledLink to='/' onClick={() => onLinkClick(0)}>Appetizer</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to='/best' onClick={() => onLinkClick(1)}>Top 1's</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to='/explore' onClick={() => onLinkClick(2)}>By Genre</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to='/custom' onClick={() => onLinkClick(3)}>Custom</StyledLink>
          </StyledItem> */}
        </StyledMenu>
      </StyledSidebar>
    );
}


const mapStateToProps = createStructuredSelector({
  genres: selectGenreList,
  isModalOpen: selectIsActive
});

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
