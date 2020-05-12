import styled, { css } from 'styled-components';
import { Form } from 'redux-form';



export const StyledForm = styled.form`
    display: grid;
    height: 90%;
    align-content: center;
    grid-row-gap: 3rem;
  
    & > button {
        justify-self: start;
    }

    & > select {
        border-radius: 6px;
        border: 1px solid rgba(0, 0, 0, .9);
        padding: .5rem .65rem;
    }
`;

export const StyledGroup = styled.div`
    & > * {
        display: block;
    }

    & > input {
        border-bottom: 2px solid rgba(0, 0, 0, .4);

        &::-webkit-inner-spin-button, 
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
            ${'' /* margin: 0; */}
        }
    }

    & > label {
        margin-bottom: 1rem;
    }

`;

