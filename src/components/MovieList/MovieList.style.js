import styled, { css } from 'styled-components';

export const StyledListContainer = styled.div`
    position: relative;
    ${'' /* overflow: hidden; */}
    margin-bottom: 4rem;
    ${'' /* display: flex;
            height: 15rem;
            width: 100%;
            align-item: center;
            justify-content: center; */}

    ${({ isLoading }) => {
        if (isLoading)
            return css`
            display: flex;
            height: 15rem;
            width: 100%;
            align-items: center;
            justify-content: center;
        `
        return css``
        }
    }

    &::before,
    ${'' /* &::after {
        content: '';
        position: absolute;
        width: 3rem;
        height: 3rem;
        background-color: red;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100;
        opacity: 1;
        visibility: visible;
        pointer-events: none;

        transition: opacity .15s linear;
    }

    &::before {
        left: 2%;

        ${({ atLeftEnd }) => atLeftEnd ? css`
            opacity: 0;
            visibility: hidden;
        ` : ''}
    }
    
    &::after {
        right: 2%;
        
        ${({ atRightEnd }) => atRightEnd ? css`
            opacity: 0;
            visibility: hidden;
        ` : ''}
    } */}

    & > .leftEnd,
    & > .rightEnd {
        position: absolute;
        ${'' /* width: 3rem;
        height: 3rem; */}
        font-size: 6rem;
        color: rgba(0, 0, 0, .5);
        line-height: 1;
        text-shadow: 1px 1px .8rem rgba(255, 255, 255, .9994);
        ${'' /* border: 1px solid black; */}
        top: 50%;
        transform: translateY(-50%);
        z-index: 100;
        opacity: 1;
        cursor: pointer;
        transition: opacity .15s linear;

        &:hover {
            color: rgba(0, 0, 0, .75);
            text-shadow: 1px 1px 11.8rem rgba(0, 0, 0, .99964);
        }
    }

    & > .leftEnd {
        left: 2%;

        ${({ atLeftEnd }) => atLeftEnd ? css`
            opacity: 0;
            visibility: hidden;
        ` : ''}
    }

    & > .rightEnd {
        right: 2%;
        
        ${({ atRightEnd }) => atRightEnd ? css`
            opacity: 0;
            visibility: hidden;
        ` : ''}
    }
`;

export const StyledList = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 25rem;
    grid-auto-rows: 15rem;
    grid-column-gap: .2rem;
    overflow-x: scroll;
    ${'' /* opacity: .7;
    transition: opacity .1s linear; */}
    ${'' /* transform: translateX(${({ offset }) => {console.log('OFFSET', offset); return css`${offset}px`}});
    transition: transform .15s linear; */}
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }

    ${'' /* &:hover {
        & > div > div {
                height: 50%;
        } 
    } */}
`;

export const StyledTitle = styled.h2`
    font-size: 1.5rem;
    color: ${({ theme: { genreColor } }) => genreColor};
    text-transform: uppercase;
    margin: 0 0 1rem 2.5rem;
    font-weight: 900;
`;