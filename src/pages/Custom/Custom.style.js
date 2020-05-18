import styled, { css } from 'styled-components';

export const StyledFormContainer = styled.div`
    position: absolute;
    top: 0;
    ${'' /* transform: translateX(-100%); */}
    padding: 2rem 3rem;
    height: 100vh;
    background: white;
    z-index: 500;
    transition: transform .25s ease-out;
    transform: translateX(${({ isVisible }) => 
         isFormVisible(isVisible)
    });

    & > button {
        position: absolute;
        background: rgba(255, 255, 255, .35);
        border-radius: 0 5px 5px 0;
        border: 2px solid rgba(255, 255, 255, .7);
        border-left: 0;
        box-shadow: inset -3px 0 5px -2px rgba(0, 0, 0, .5);
        width: 2.5rem;
        height: 2.5rem;
        right: -2.5rem;
        top: 30%;
        ${'' /* transform: translateY(-50%); */}
        opacity: ${({ isVisible }) => {
            return isVisible ? 1 : .35;
        }};
    }
`;




const isFormVisible = isFormVisible => {
    return isFormVisible ? css`0` : css`-101%`;
}
