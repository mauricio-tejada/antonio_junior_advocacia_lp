import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    max-height: 100px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

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
            img {
                opacity: 0;
                transform: translate(-100%, 0);
                transition: transform 0.3s, opacity 0.5s;    
            }
            overflow: hidden;    
        }

        &:hover {
            a:last-child {
                img {
                    transform: translate(0, 0);
                    opacity: 1;
                }
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

    nav ~ a {
        display: none;
    }

    @media (max-width: 950px) {
        padding: 1.75rem 1.5rem;  
        nav {
            display: none;
        }

        nav ~ a {
        display: block;
        }
    }

`