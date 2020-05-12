import styled from 'styled-components'

export const StyledApp = styled.div`
    position: relative;
    display: flex;
    ${'' /* display: grid;
    grid-template-columns: 25vw 75vw; */}
    ${'' /* grid-template-rows: 100vh; */}
    max-height: 100vh;
    ${'' /* height: 100vh; */}
`;

export const StyledContainer = styled.div`
    position: relative;
    overflow-y: scroll;
    width: 80%;
    background-color: ${({ theme }) => theme.page.bgColor};
`;