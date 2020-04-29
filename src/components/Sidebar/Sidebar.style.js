import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const setRulesByColorMap = (property, colors) => {
    console.log('COLORS RULESSSSSSSS', colors)
    let style = '';
    
    for (let i = 0; i < 4; i++) {
        style += `
            &:nth-child(${i + 1}) > a {
                ${property}: ${colors[i]}
            }
        `;
    }

    return css`${style}`;
};

export const StyledSidebar = styled.div`
    padding-top: 1.5rem;
    background-color: ${props => props.theme.sidebarBGColor};
    box-shadow: 0 0 .5rem rgba(0, 0, 0, .5);
`;

export const StyledToggle = styled.button`
    border-radius: 6px;
    background-color: ${props => props.theme.reverse};
    margin: 0 0 2rem 1.5rem;
    width: 1.6rem;
    height: 1.6rem;
    box-shadow: 0 3px 6px rgba(255, 255, 255, .3);
`;

export const StyledTitle = styled.h2`
    margin-bottom: 6rem;
    font-size: 1.9rem;
    font-weight: 900;
    color: white;
    padding-left: 2rem;
`;

export const StyledMenu = styled.ul`
    display: grid;
    grid-template-rows: repeat(4, 6.5rem);
`;

export const StyledItem = styled.li`
    display: flex;
    ${setRulesByColorMap('border-color', props => props.theme.colorArray)};
`;

export const StyledLink = styled(Link)`
    display: block;
    flex: 1;
    color: rgba(255, 255, 255, .2);
    font-size: 1.8rem;
    font-weight: 900;
    line-height: 6.5rem;
    padding-left: 1.5rem;
    ${'' /* background-image: linear-gradient(-90deg, transparent 50%, rgba(0, 0, 0, .2) 50%);
    background-size: 200%;
    background-position: right; */}
    background-color: rgba(0, 0, 0, 0);
    transition: all .1s ease-out, padding .15s ease-out;
    border-left: .55rem solid;/* rgba(235, 64, 52, .5);*/

    
    ${'' /* @for $i from 0 through 3 {
       border-color: map.get($page-colors, $i);
    } */}

    &:hover {
        padding-left: 2.5rem;
        background-color: rgba(0, 0, 0, .3);
        border-color: rgba(0, 0, 0, .1);
        color: rgba(235, 64, 52, .7);
    }

`;
