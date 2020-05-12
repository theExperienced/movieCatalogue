import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

// const setRulesByColorMap = (property, colors) => {
//     console.log('COLORS RULESSSSSSSS', colors)
//     let style = '';
    
//     for (let i = 0; i < 4; i++) {
//         style += `
//             &:nth-child(${i + 1}) > a {
//                 ${property}: ${colors[i]}
//             }
//         `;
//     }

//     return css`${style}`;
// };

export const StyledSidebar = styled.div`
    width: 20%;
    background-color: ${({ theme }) => theme.sidebar.bgColor};
    box-shadow: .5rem 0 .5rem rgba(0, 0, 0, .35);
    z-index: 1001;
`;

export const StyledToggle = styled.button`
    border-radius: 6px;
    background-color: ${({ theme }) => theme.reverse};
    margin: 0 0 2rem 1.5rem;
    width: 1.6rem;
    height: 1.6rem;
    box-shadow: 0 3px 6px rgba(255, 255, 255, .3);
`;

export const StyledTitleContainer = styled.div`
    padding: 1.5rem 0 ;
    ${'' /* margin-bottom: 5rem; */}
    border-bottom: 1rem solid #78683c;
    font-size: 3rem;
    line-height: 1.1;
`

export const StyledTitle = styled.h2`
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 900;
    color: white;
    padding-left: 2.5rem;
`;

export const StyledMenu = styled.ul`
    display: grid;
    grid-template-rows: repeat(4, 6.5rem);

    ${'' /* & > li > a {
        ${({activePage}) => activePage ? 
             css`
                border-left: 1rem solid red;
            ` :
            
             null
        }
    } */}
`;

export const StyledItem = styled.li`
    display: flex;
    ${'' /* ${setRulesByColorMap('border-color', ({ theme }) => colorArray)}; */}
`;



// $color1: rgba(176, 161, 186, 1);
// $color2: rgba(165, 181, 191, 1);
// $color3: rgba(171, 200, 199, 1);
// $color4: rgba(184, 226, 200, 1);
// $color5: rgba(191, 240, 212, 1);


// $color1: rgba(247, 37, 133, 1);
// $color2: rgba(114, 9, 183, 1);
// $color3: rgba(58, 12, 163, 1);
// $color4: rgba(67, 97, 238, 1);
// $color5: rgba(76, 201, 240, 1);




const pageColors = ['rgba(247, 37, 133, 1)',
    'rgba(114, 9, 183, 1)',
    'rgba(58, 12, 163, 1)',
    'rgba(67, 97, 238, 1)',]

// const pageColors = [ '#aa7810', '#b8bac8', '#b4d6d3', '#b2ffd6']
// const pageColors = [ '170, 120, 16', '184, 186, 200', '180, 214, 211', '178, 255, 214']
const pageColor = pageNum => pageColors[pageNum];

export const StyledLink = styled(Link)`
    display: block;
    position: relative;
    flex: 1;
    color: rgba(255, 255, 255, .25);
    font-size: 1.8rem;
    font-weight: 900;
    line-height: 6.5rem;
    padding-left: 3rem;
    ${'' /* background-image: linear-gradient(-90deg, transparent 50%, rgba(0, 0, 0, .2) 50%);
    background-size: 200%;
    background-position: right; */}
    background-color: rgba(0, 0, 0, 0);
    transition: all .1s ease-out, padding .15s ease-out;
    /*border-left: .55rem solid; rgba(235, 64, 52, .5);*/
    
    &::after {
        content: '';
        width: 1rem;
        height: 100%;
        background-color: ${({theme, pageNum }) => theme.page.colors[pageNum]};
        box-shadow: 0 0 3px rgba(255, 255, 255, 1),  0 0 1rem rgba(255, 255, 255,, .1);
        position: absolute;
        right: 0;
        transition: opacity .05s linear;
    }

    ${({isActive}) => isActive ? 
             css`
                &::after {
                    opacity: 1;
                }
            ` :
            
            css`
                &::after {
                    opacity: 0;
                }
            `
        }
    
    ${'' /* @for $i from 0 through 3 {
       border-color: map.get($page-colors, $i);
    } */}

    &:hover {
        padding-left: 3.5rem;
        background-color: rgba(0, 0, 0, .3);
        ${'' /* border-color: rgba(0, 0, 0, .1); */}
        color: rgba(255, 255, 255, .54);
    }

`;
