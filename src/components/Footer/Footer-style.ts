import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    max-height: 100px;

    padding: 0 1rem 0 1rem;

    background: linear-gradient(${props => props.theme.gray800}, ${props => props.theme.gray800}) padding-box,
                ${props => props.theme.gradientBorder} border-box;
    border-radius: 8px;
    border: 1px solid transparent;

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
        gap: 2rem;
        padding: 2.5rem 0 2.5rem 0;

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