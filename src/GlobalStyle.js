import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Solway|Raleway|Montserrat&display=swap');

    ${'' /* $page-colors: (
        0: 170, 120, 166,
        1: 184, 186, 200,
        2: 180, 214, 211,
        3: 178, 255, 214,
    ) */}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inherit;
    }

    a:link,
    a:active,
    a:visited,
    a:focus {
        text-decoration: none;
        color: none;
    }

    ul {
        list-style-type: none;
    }

    select, 
    input, 
    button {
        outline: none;
        border: none;
    }

    button {
        cursor: pointer;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }
`;

export const StyledPage = styled.div`
    display: grid;
    background-color: ${props => props.theme.pageBGColor};
    height: 100vh;
    padding: 2.5rem 2rem;

    & > h1 {
        text-transform: uppercase;
        font-weight: 900;
    }
`;

export const themes = {
    dark: {
        pageBGColor: 'rgba(0, 0, 0, .85)',
        sidebarBGColor: 'rgba(0, 0, 0, .9)',
        colorArray: [
        '170, 120, 16',
        '184, 186, 200',
        '180, 214, 211',
        '178, 255, 214'
        ],
        reverse: 'rgba(0, 0, 0, .05)'
    },
    light: {
        pageBGColor: 'rgba(0, 0, 0, .05)',
        sidebarBGColor: 'rgba(0, 0, 0, .1)',
        colorArray: [
        '170, 120, 16',
        '184, 186, 200',
        '180, 214, 211',
        '178, 255, 214'
        ],
        reverse: 'rgba(0, 0, 0, .85)'
    }
  };