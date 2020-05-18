import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    ${'' /* @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Solway|Raleway|Montserrat&display=swap'); */}

    :root {
        font-size: 100%;
    }
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
    position: relative;
    height: 100vh;
    padding: 2.5rem 0;

    & > h1 {
        text-transform: uppercase;
        margin-left: 4rem;
        font-weight: 900;
        font-size: 4rem;
        text-shadow: 1px 2px 0 black, 1px 2px .5rem black;
        line-height: 1;
        color: ${({ theme, page }) => theme.page.colors[page]};
        margin-bottom: 3.5rem;
    }

    ${({ page }) => {
        if (page === 1 || page === 3) {
            return css`
                & > h1 {
                    margin-bottom: 10rem;
                }
            `
        }
    }}
`;

export const themes = {
    dark: {
        sidebar: {
            bgColor: 'rgba(0, 0, 0, .85)',
            linkTextColor: 'rgba(255, 255, 255, .45)',
            titleTextColor: 'rgba(255, 255, 255, .9)'
        },
        page: {
            bgColor: 'rgba(0, 0, 0, .9)',
            colors: [
                'rgba(137, 0, 242, 1)',
                'rgba(177, 0, 232, 1)',
                'rgba(209, 0, 209, 1)',
                'rgba(229, 0, 164, 1)'
            ]
        },
        genreColor: 'rgba(255, 255, 255, .9)',
        item: {
            overlayColor: 'rgba(0, 0, 0, .6)',
            textColor: 'rgba(255, 255, 255, .9)'
        },
        inverse: 'rgba(0, 0, 0, .05)',
        modal: {
            textColor: '255, 255, 255',
            bgColor: '20, 20, 20'
        }
    },
    light: {
        sidebar: {
            bgColor: 'rgb(232, 195, 201)',
            linkTextColor: 'rgb(54, 44, 45)',
            titleTextColor: 'rgb(138, 58, 66)'
        },
        page: {
            bgColor: 'rgb(235, 218, 221)',
            colors: [
                'rgba(110, 20, 35, 1)',
                'rgba(167, 30, 52, 1)',
                'rgba(199, 31, 55, 1)',
                'rgba(224, 30, 55, 1)'
            ]
        },
        genreColor: 'rgba(255, 255, 255, .9)',
        item: {
            overlayColor: 'rgba(255, 255, 255, .9)',
            textColor: 'rgba(0, 0, 0, .6)',
            boxShadow: '0 3px 5px rgba(0, 0, 0, .3)'
        },
        inverse: 'rgba(0, 0, 0, .85)',
        modal: {
            textColor: '0, 0, 0',
            bgColor: '255, 255, 255'
        }
    }
  };