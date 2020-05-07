import React from 'react'
import { Link, withRouter } from 'react-router-dom';

import { StyledLink } from '../Sidebar/Sidebar.style';

const SidebarLink = ({ to, onClick, isActive, history, children }) => {
    const ownOnClick = () => {
        console.log('CLICK SIDEBAR LINK', to)
        onClick();
        history.push(to);
    }
                                                                ///////////////CURRENTYL UNUSED
    return (
        <StyledLink to={to} onClick={ownOnClick} isActive={isActive}>
            {children}
        </StyledLink>
    );
    
}

export default withRouter(SidebarLink);
