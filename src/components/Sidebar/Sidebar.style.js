import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';

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
    box-shadow: .4rem 0 .3rem rgba(0, 0, 0, .15);
    z-index: 1001;
`;

export const StyledToggle = styled.div`















        touch-action: pan-x;
    
        display: inline-block;
        position: relative;
        cursor: pointer;
        background-color: transparent;
        border: 0;
        padding: 0;
    
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        & > .track {
            position: absolute;
            width: 4.5rem;
            height: 1.2rem;
            padding: 0;
            border-radius: 30px;
            background-color: #4D4D4D;
            -webkit-transition: all 0.2s ease;
            -moz-transition: all 0.2s ease;
            transition: all 0.2s ease;
            
        }

        & > .thumb {
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateX(-50%);
            width: 1.8rem;
            height: 1.8rem;
            ${'' /* border: 1px solid #4D4D4D; */}
            border-radius: 50%;
            background-color: #FAFAFA;
        
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        
            -webkit-transition: all 0.25s ease;
            -moz-transition: all 0.25s ease;
            transition: all 0.25s ease;
        }

        & > .input:checked + .track {

        }

        & > .input:checked ~ .thumb {
            left: 100%;
        }
    `;

export const ToggleButton = styled(Toggle)`

    .react-toggle {
    touch-action: pan-x;

    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    }

    .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    }

    .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
    }

    .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: #4D4D4D;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
    }

    .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #000000;
    }

    .react-toggle--checked .react-toggle-track {
    background-color: #19AB27;
    }

    .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #128D15;
    }

    .react-toggle-track-check {
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
    }

    .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
    }

    .react-toggle-track-x {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
    }

    .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
    }

    .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid #4D4D4D;
    border-radius: 50%;
    background-color: #FAFAFA;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;
    }

    .react-toggle--checked .react-toggle-thumb {
    left: 27px;
    border-color: #19AB27;
    }

    .react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 3px 2px #0099E0;
    -moz-box-shadow: 0px 0px 3px 2px #0099E0;
    box-shadow: 0px 0px 2px 3px #0099E0;
    }

    .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 5px 5px #0099E0;
    -moz-box-shadow: 0px 0px 5px 5px #0099E0;
    box-shadow: 0px 0px 5px 5px #0099E0;
    }
`;

export const StyledTitleContainer = styled.div`
    padding: 1.5rem 0 ;
    ${'' /* margin-bottom: 5rem; */}
    ${'' /* border-bottom: 1rem solid #78683c; */}
    font-size: 3rem;
    line-height: 1.1;
`

export const StyledTitle = styled.h2`
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 900;
    color: ${({ theme }) => theme.sidebar.titleTextColor};
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
    color: ${({ theme }) => theme.sidebar.linkTextColor};
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








// React Toggle 


