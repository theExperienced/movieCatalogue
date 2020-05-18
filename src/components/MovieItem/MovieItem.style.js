import styled, { css } from 'styled-components';

export const StyledItem = styled.div`
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    ${({ theme }) => theme.item.boxShadow ? `box-shadow: ${theme.item.boxShadow }` : '' };

    ${({isListItem, poster}) => {
        if (isListItem) 
            return css`
                position: relative;
                ${'' /* display: flex; */}
                ${'' /* flex-direction: column; */}
                ${'' /* align-items: stretch; */}
                cursor: pointer;
                ${'' /* transition: align-items .1s linear; */}
                ${'' /* padding-top: auto; */}

                & > img {
                    display: block;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                    transition: transform .25s ease-in;
                }
                
                & > div {
                    ${'' /* display: flex; */}
                    flex: 1;
                    ${'' /* flex-direction: column;
                    justify-content: flex-end; */}
                    height: 30%;
                    z-index: 1;
                    background-color: ${({ theme }) => theme.item.overlayColor};
                    padding: .7rem 1rem;

                    & > h3,
                    & > p {
                        color: ${({ theme }) => theme.item.textColor};
                    }

                    & > h3 {
                        margin-bottom: .5rem;
                    }
                }
            `;
        }
    }

    &:hover > img {
        transform: scale(1.02);
    }
`;