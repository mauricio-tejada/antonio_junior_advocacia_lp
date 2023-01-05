import styled from "styled-components";

export const ServicesContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;

    position: relative;

    margin-bottom: 12rem;

    .branchBg {
        position: absolute;
        right: -25%;
        top: -8%;
        z-index: 100;

        transform: scaleX(-1);
        rotate: -10deg;
    }

    .headerContainer {
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
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;

    z-index: 200;
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

    overflow: hidden;
    cursor: pointer;

    
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &:hover {
        .description {
            animation: toRight 0.5s;
            transform: translate(0, 0);
        }

        .casesCount {
            opacity: 0;
        }

        .header {
            animation: toBottom 0.5s;
            transform: translate(0, 0);
        }

        .arrow {
            animation: toTop 0.5s;
            transform: translate(0, 0);
        }


    }

    h3 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 150%;
    }

    .description {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;

        color: ${props => props.theme.gray300};

        transform: translate(-120%, 0);
        transition: transform 0.5s;
    }
    
    .casesCount {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 150%;
        
        color: ${props => props.theme.gray500};
        transition: opacity 0.3s;
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
        
        transform: translate(-50%, 50%);
        transition: transform 0.5s;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        margin-right: 3.31rem;
        transform: translate(0, 200%);
        transition: transform 0.5s;
    }
    
    
        @keyframes toRight {
            0% {transform: translate(-120%, 0);}
            50% {transform: translate(10%, 0);}
            100% {transform: translate(0, 0);}
        }
    
        @keyframes toBottom {
            0% {transform: translate(0, 200%);}
            50% {transform: translate(0, -20%);}
            100% {transform: translate(0, 0);}
        }
    
        @keyframes toTop{
            0% {transform: translate(-50%, 50%);}
            50% {transform: translate(20%, -20%);}
            100% {transform: translate(0, 0);}
        }
    `