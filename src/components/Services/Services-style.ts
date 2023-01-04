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

    background: linear-gradient(${props => props.theme.gray700}, ${props => props.theme.gray700}) padding-box,
                ${props => props.theme.gradientBorder} border-box;
    border-radius: 8px;
    border: 1px solid transparent;

    padding: 1.5rem;
    border-radius: 8px;

    
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h3 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 150%;
    }

    p {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;

        color: ${props => props.theme.gray300}
    }

    p:last-child {
        font-size: 0.75rem;
    }

    .contentContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex: 1;
    }

    .arrow {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        margin-right: 3.31rem;
    }
`