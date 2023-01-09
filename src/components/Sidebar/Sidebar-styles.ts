import styled from "styled-components"

export const SidebarContainer = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    //display: none;

    background: ${props => props.theme.primaryDark};

    width: 100%;
    height: 100vh;
    max-height: 750px;
    padding: 2rem;

    z-index: 5;

    a {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 150%;

        color: ${props => props.theme.gray100};
    }

    p {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;

        color: ${props => props.theme.gray100};
    }

    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
    }

    .socialNav {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;

        a {
            background: linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)) padding-box,
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

    footer {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;

        p {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 150%;

            color: ${props => props.theme.gray050};
        }
    }

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: 100%;
    }

`