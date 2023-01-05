import styled from "styled-components";

export const CTAContainer = styled.section`
    background: ${props => props.theme.gradientSection};

    width: 100%;
    height: 542px;
    position: relative;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
`
export const Content = styled.div`
    width: 100%;
    max-width: 1224px;


    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8rem;

    position: relative;

    
    .branchBg {
        position: absolute;
        right: -2%;
        top: 15%;
        z-index: 100;

        transform: scaleX(-1);
        rotate: -10deg;
    }

    h1 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 3.5rem;
        line-height: 125%;

        color: ${props => props.theme.gray100};
    }
    
    p {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 150%;

        max-width: 418px;

        color: ${props => props.theme.gray300};
    }

    div {
        display: flex;
        flex-direction: column;;
        justify-content: center;
        gap: 1.5rem;
        z-index: 200;

        width: 500px;
    }

    button {
        max-width: 195px;
        margin-top: 1.5rem;
    }

    img {
        margin-top: -4.25rem;
    }
`