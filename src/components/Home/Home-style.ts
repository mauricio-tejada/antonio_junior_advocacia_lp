import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    justify-content: center;
    position: relative;

    margin-bottom: 8rem;
    
    width: 100%;
    max-width: 1224px;

    img:last-child {
        position: absolute;
        left: -9%;
        top: 0.15%;
    }

    .homeBg {
        position: absolute;
        right: 10.5%;
        top: 0;
        z-index: 100;
    }

    `
export const HomeContent = styled.div`
    
    margin: 9rem 17.4rem 0 0;
    z-index: 200;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6.81rem;

    width: 550px;
    height: 100%;

    h1 + div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;

        width: 350px;
    }
    
    p {
        font-family: 'Fira Sans';
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 150%;
        color: #A8A8AA;
        opacity: 0.8;
    }
    
    p + div {
        display: flex;
        justify-content: space-between;

        
    }
    `

export const Popup = styled.div`

    position: absolute;
    width: 396px;
    height: 139px;
    left: 890px;
    top: 484px;
    z-index: 200;

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

`