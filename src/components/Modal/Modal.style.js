import styled, { css } from 'styled-components';

export const StyledModal = styled.div`
    position: fixed;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    width: 80%;
    height: 100vh;
    background-image: ${({ modal}) => css`linear-gradient(to right, rgba(theme.modal.bgColor, 1) 30%, rgba(theme.modal.bgColor, .85))`}, 
                        url(https://image.tmdb.org/t/p/w780/h1JzHjFJXNJb3QTCwWmm2UbWEwn.jpg);
    background-size: cover;
    background-position: center;
    ${'' /* background-repeat: no-repeat; */}
    z-index: 1000;
    padding: 5.5rem 8rem 8rem 4.5rem;
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

    & > .title {
        grid-column: 1 / 3;
        font-size: 2rem;
        color: rgba(${({ theme }) => theme.modal.textColor}, .9);

        & > .genres {
            color: rgba(${({ theme }) => theme.modal.textColor}, .7);
            margin-top: 6.5px;
            font-size: 1rem;
            line-height: 1;
        }

        & > .year {
            font-size: 1.8rem;
            font-weight: 100;
            color: rgba(${({ theme }) => theme.modal.textColor}, .7); 
        }

        & > .rating {
            font-weight: 700;
            font-size: 1.5rem;
            color: rgba(${({ theme }) => theme.modal.textColor}, .7);
        }

        & > .language {
            font-weight: 700;
            font-size: 1.35rem;
            color: rgba(${({ theme }) => theme.modal.textColor}, .7);
        }
    }

    & > .imgContainer
    & > .content {
        
    }

    & > .imgContainer {
        display: flex;
        justify-content: center;
        ${'' /* align-items: center; */}

        & > img {
            ${'' /* width: 100%; */}
            ${'' /* height: 100%; */}
            border-radius: 10px;
        }
    }
    

    & > .content {
        display: flex;
        flex-direction: column;

        

        

        & > .overview {
            font-size: 1.7rem;
            font-weight: 700;
            margin-bottom: auto;
            color: rgba(${({ theme }) => theme.modal.textColor}, .9);

            & > span {
                margin-top: 1rem;
                display: block;
                font-size: 1.1rem;
                color: rgba(${({ theme }) => theme.modal.textColor}, .7);
                font-weight: 100;
                line-height: 1.55;
                padding-right: 15rem;
            }
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