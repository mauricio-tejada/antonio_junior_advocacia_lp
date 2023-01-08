import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
    
    width: 100%;
    max-width: 1224px;

    .branchBg {
        position: absolute;
        left: -9%;
        top: 0.15%;
    }

    .homeBg {
    }
    
    .paralaxContainer {
        position: absolute;
        right: 10.5%;
        top: 0;
    }

    .paralaxItem {
    
    position: absolute;
    width: 396px;
    height: 139px;
    right: -40%;
    top: 70%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: 8px;

    background: ${props => props.theme.gradientBorder};
    filter: drop-shadow(29px 4px 56px rgba(20, 20, 21, 0.25));
    backdrop-filter: blur(12px);


    border-radius: 4px;

    p {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 29px;
        color: ${props => props.theme.gray200};
        opacity: 0.8;
    }

    strong {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.37rem;
        color: ${props => props.theme.gray100};
    }

    }

    @media (max-width: 970px) {
        /* flex-direction: column;
        justify-content: center; */
    }

    `
export const HomeContent = styled.div`
    
    margin: 9rem 0 0 16%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;

    max-width: 550px;
    max-height: 566px;
    width: 44%; 

    @media (max-width: 1120px) {
        margin: 9rem 0 0 10%;
    }
    @media (max-width: 1105px) {
        margin: 9rem 0 0 7%;
    }
    
    p {
        font-family: 'Fira Sans';
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 150%;
        color: #A8A8AA;
        opacity: 0.8;

        max-width: 350px;

        margin: 6.81rem 0 2rem 0;
    }
    
    .buttonContainer {
        display: flex;
        justify-content: space-between;
        max-width: 350px;


        @media (max-width: 1024px) {
            justify-content: flex-start;
            gap: 1rem;
        }
    }
    `






