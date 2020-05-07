import styled, { css } from 'styled-components';

export const StyledModal = styled.div`
    position: fixed;
    width: 80%;
    height: 100vh;
    background-image: radial-gradient(80deg, #121111 55%, transparent), url(https://image.tmdb.org/t/p/w780/h1JzHjFJXNJb3QTCwWmm2UbWEwn.jpg);
    ${'' /* background-size: cover; */}
    background-position: right center;
    background-repeat: no-repeat;
    z-index: 1000;
    padding: 3rem 16.5rem 3rem 3.5rem;
    transition: opacity .15s linear;

    ${({isActive}) => isActive ?
        css`
            opacity: 1;
            visibility: visible;
        ` :
        css`
            opacity: 0;
            visibility: 'hidden';
        `
    }

    & > .exit {
        position: absolute;
        top: 2rem;
        right: 2rem;
        cursor: pointer;
    }

    & > .content {
        display: grid;
        grid-row-gap: 1rem;

        & > .title {
            font-size: 3rem;
            padding: .5rem 1.2rem;
            background-color: rgba(255, 255, 255, .8);
            width: max-content;
            border-radius: 5px;
            color: #21262e;
            box-shadow: 0 .5rem .5rem rgba(0, 0, 0, .2);
            transform: skewX(-7deg);
        }

        & > .overview {
            font-size: 1.5rem;
        }
    }


                ${'' /* opacity: 1;
                visibility: visible; */}
    ${'' /* ${({ isActive }) => {
        if (isActive) 
            return css`
                opacity: 1;
                visibility: visible;
                z-index: 10;
            `;
        return css`
            opacity: 0;
            visibility: hidden;
        `
    }} */}



    
    
          

`;