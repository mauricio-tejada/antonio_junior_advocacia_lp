import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    max-height: 100px;

    z-index: 300;
    position: fixed;
    top: 0;
    left: 0;

    padding: 0 1rem 0 1rem;

    background: ${props => props.theme.gradientDark};
    filter: drop-shadow(4px 21px 32px rgba(20, 20, 21, 0.25));
    backdrop-filter: blur(8px);
`

export const LogoContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;

        a:last-child {
            opacity: 0;
            transition: opacity 1s;        
        }

        &:hover {
            a:last-child {
                opacity: 1;
            }
        }

        
    @media (max-width: 1240px) {
        a:last-child {
            display: none;        
        }
    }
    
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 1.75rem 0;  

    max-width: 1224px;
    margin: 0 auto;
    
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1rem;
    }

`