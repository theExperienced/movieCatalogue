import styled, { css } from 'styled-components';
import { StyledPage } from '../../GlobalStyle';



// export const StyledTitle = styled.h1`
//     grid-row: 1 / 2;
// `;





// export const StyledRandomPage = styled(StyledPage)`
//     grid-template-rows: max-content;
//     grid-row-gap: 15vh;
    

    
// `;



export const StyledRandomPage = styled.div`
    position: relative;
    ${'' /* display: flex;
    flex-direction: column; */}
    padding: 6rem 8rem 0 4.5rem;

    & > .generator {
        position: absolute;
        right: 3rem;
        top: 3rem;
        align-self: flex-end;
        font-size: 1.5rem;
        margin-bottom: 3.5rem;
        background-color: rgba(255, 255, 255, .7);
        border-radius: 15px;
        padding: .5rem 1rem;
    }

    & > .movie {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: min-content;
        grid-column-gap: 2rem;
        grid-row-gap: 2.5rem;
        height: 100vh;
        background-image: ${({ modal}) => css`linear-gradient(to right, rgba(theme.modal.bgColor, 1) 30%, rgba(theme.modal.bgColor, .85))`}, 
                            url(https://image.tmdb.org/t/p/w780/h1JzHjFJXNJb3QTCwWmm2UbWEwn.jpg);
        background-size: cover;
        background-position: center;
        ${'' /* background-repeat: no-repeat; */}
        ${'' /* z-index: 1000; */}
        transition: opacity .15s linear;



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
            overflow: hidden;
            max-height: 30rem;
            max-height: 40rem;
            ${'' /* align-items: center; */}

            & > img {
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
                    padding-right: 10rem;
                }
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


