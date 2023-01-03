import styled from "styled-components";

export const ServicesContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;

    margin-bottom: 12rem;
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h2 {
        color: ${props => props.theme.gray100};
        font-family: 'Lato';
        font-weight: 400;
        font-size: 2.5rem;
        line-height: 125%;
    }

    p {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 29px;
        color: ${props => props.theme.gray200};
        opacity: 0.8;
        text-align: center;

        max-width: 635px;
    }

`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
`

export const ServiceCard = styled.div`
    width: 20.18rem;
    height: 15.12rem;

    background-color: black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`