import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 8rem;

    background: #1C1A22;
`

export const SocialLinks = styled.div`

    max-width: 1224px;
    width: 100%;

    position: sticky;
    bottom: 230px;
    z-index: 1;


    nav {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;

        a {
            background: linear-gradient(${props => props.theme.gray700}, ${props => props.theme.gray700}) padding-box,
                ${props => props.theme.gradientBorder} border-box;
            border-radius: 8px;
            border: 1px solid transparent;

            border-radius: 8px;

            cursor: pointer;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`