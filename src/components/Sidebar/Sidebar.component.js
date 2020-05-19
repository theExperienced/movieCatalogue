import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleTheme } from '../../redux/theme/theme.actions';
import { selectGenreList } from '../../redux/genres/genres.selector';
import { closeModal } from '../../redux/modal/modal.actions';
import { selectIsActive } from '../../redux/modal/modal.selector';

import ToggleButton from 'react-toggle-button';
import { Toggle } from 'react-toggle-component';

import { StyledSidebar, StyledTitleContainer, StyledTitle, StyledMenu, StyledItem, StyledLink, StyledLabel } from './Sidebar.style';

const Sidebar = ({ toggleTheme, closeModal, match }) => {
  const [ currPage, setCurrPage ] = useState(0);
  const [ isDarkTheme, setIsDarkTheme ] = useState(true);

  useEffect(() => {
    console.log('MATCH', match)
    const { url } = match;

    for (let i = 0; i < pageTos.length; i++) {
      if (pageTos[i] === url) {
        console.log('pageTos', pageTos)
        setCurrPage(i); 
      }
    }
  }, [])

  const pageTos = ['/', '/best', '/explore', '/custom'];
  const pageTitles = ['Appetizer', 'Top 1\'s', 'By Genre', 'Custom'];

    const handleToggle = () => {
      toggleTheme();
      setIsDarkTheme(prev => !prev);
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
      {/* <Toggle onChange={onThemeClick} /> */}




      <StyledLabel htmlFor='toggle'>
        <Toggle
          leftBackgroundColor='white'
          rightBackgroundColor='black'
          borderColor='black'
          knobColor='grey'
          name='toggle'
          onToggle={handleToggle}
        />
        To {isDarkTheme ? 'light' : 'dark'}
      </StyledLabel>



      {/* <ToggleButton
      style={{marginBottom: '5rem'}}
        inactiveLabel={''}
        activeLabel={''}
        colors={{
          activeThumb: {
            base: 'rgb(250,250,250)',
          },
          inactiveThumb: {
            base: 'rgb(62,130,247)',
          },
          active: {
            base: 'rgb(207,221,245)',
            hover: 'rgb(177, 191, 215)',
          },
          inactive: {
            base: 'rgb(65,66,68)',
            hover: 'rgb(95,96,98)',
          }
        }}
        // trackStyle={styles.trackStyle}
        // thumbStyle={styles.thumbStyle}
        thumbAnimateRange={[-10, 36]}
        // thumbIcon={<ThumbIcon/>}
        // value={self.state.value}
        onToggle={toggleTheme} /> */}






      {/* <ToggleButton
        id='cheese-status'
        onChange={onThemeClick} /> */}

        {/* <StyledToggle className='toggle'>
          <input type='checkbox'/>
          <div className='track'></div>
          <div className='thumb'></div>
        </StyledToggle> */}



      {/* </Toggle> */}
        <StyledTitle>Movie<br/>Guide</StyledTitle>
      </StyledTitleContainer>
      <StyledMenu> {/*activePage={currPage}*/}
        {renderMenuItems()}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
