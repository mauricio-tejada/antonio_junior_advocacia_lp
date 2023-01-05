import styled from "styled-components";

export const SocialProofContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    
    margin-bottom: 21rem;
    
    width: 100%;
    max-width: 1224px;
    
    .branchImg {
        position: absolute;
        left: -8%;
        top: -120%;
        
        z-index: 100;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    z-index: 200;


    p {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 150%;

        color: ${props => props.theme.gray300};
        max-width: 392px;
    }

    button {
        max-width: 195px;
        margin-top: 1.5rem;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;

    .currentCard {
        transform: scale(1);
        position: absolute;
        z-index: 1;
        
    }
`

export const SocialProofCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transform: scale(0.70);


    background: linear-gradient(${props => props.theme.gray700}, ${props => props.theme.gray700}) padding-box,
                ${props => props.theme.gradientBorder} border-box;
    border-radius: 8px;
    border: 1px solid transparent;
    box-shadow: 16px 0px 48px rgba(20, 20, 21, 0.25), -16px 0px 48px rgba(20, 20, 21, 0.25);


    padding: 2rem;
    gap: 2rem;

    width: 24.43rem;
    height: 16.75rem;

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-self: center;

        width: 100%;

        .name {
            align-self: center;

            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 1rem;
            line-height: 150%;

            color: ${props => props.theme.gray050};
        }
    }

    .content {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 150%;

        color: ${props => props.theme.gray300};

    }
`