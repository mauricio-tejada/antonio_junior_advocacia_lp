import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    max-height: 100px;

    padding: 0 1rem 0 1rem;

    background-color: gray;

`
export const FooterContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    max-width: 1224px;
    margin: 0 auto;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 2.5rem;
    }
    
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 5rem;
        padding: 2.5rem 0 2.5rem 0;

        a {
            list-style-type: none;
            text-decoration: none;
        } 
    }
`