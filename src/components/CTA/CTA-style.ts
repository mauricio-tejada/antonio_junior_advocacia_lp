import styled from "styled-components";

export const CTAContainer = styled.section`
    background-color: black;
    width: 100%;

    margin-bottom: 20rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    
`
export const Content = styled.div`
    width: 100%;
    max-width: 1224px;


    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8rem;

    div {
        display: flex;
        flex-direction: column;;
        justify-content: center;
        gap: 8rem;

        width: 500px;
    }

    img {
        margin-top: -4.25rem;
    }
`