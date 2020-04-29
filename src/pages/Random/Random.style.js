import styled from 'styled-components';

import { StyledPage } from '../../GlobalStyle';

export const StyledRandomPage = styled(StyledPage)`
    grid-template-rows: max-content;
    grid-row-gap: 15vh;
    

    
`;

export const StyledTitle = styled.h1`
    grid-row: 1 / 2;
`;

export const StyledButton = styled.button`
    grid-row: 1 / 2;
`;