import styled from "styled-components";

export const SocialProofContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 7.87rem;

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

    width: 500px;

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

export const SocialProofCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: linear-gradient(${props => props.theme.gray700}, ${props => props.theme.gray700}) padding-box,
                ${props => props.theme.gradientBorder} border-box;
    border-radius: 8px;
    border: 1px solid transparent;


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