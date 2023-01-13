import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
    
    width: 100%;
    max-width: 1224px;

    padding: 0 2rem 0 2rem;

    .branchBg {
        position: absolute;
        left: -9%;
        top: 0.15%;
        z-index: 0;
    }
    
    .paralaxContainer {
        position: absolute;
        right: 10.5%;
        top: 0;
        z-index: 1;
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

    @media (max-width: 1024px) {

        .parallaxImg {
            width: 400px;
        }

        .paralaxContainer {
            right: 5%;

            .paralaxItem {
                right: -35%;
                top: 60%;
            }
        }
    }

    @media (max-width: 850px) {

        .parallaxImg {
            width: 350px;
        }

        .paralaxContainer {
            top: 10%;
        }
    }

    @media (max-width: 821px) {

        .parallaxImg {
            width: 311px;
        }

        .paralaxContainer {
            top: 10%;

            .paralaxItem {
                width: 273px;
                height: 96px;
                padding: 1.37rem;
                gap: 5.5px;

                p {
                    
                    font-size: 1rem;
                    line-height: 20px;
                }

                strong {
                    font-size: 1.37rem;
                    line-height: 1.32rem;
                } 
            }
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;

        .homeBg {
            display: flex;
            justify-content: center;
        }

        .paralaxContainer {
            position: relative;
            margin-top: 2rem;
            right: 0;
            
            .paralaxItem {
                top: 70%;
            }
        }

    }

    `
export const HomeContent = styled.div`
    
    margin: 9rem 0 0 16%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;

    max-width: 550px;
    max-height: 566px;
    width: 44%; 

    
    p {
        font-family: 'Fira Sans';
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 150%;
        color: #A8A8AA;
        opacity: 0.8;

        width: 100%;
        max-width: 350px;
        
        margin: 6.81rem 0 2rem 0;
        padding: 0 1.5rem 0 0;
    }
    
    .buttonContainer {
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        
        width: 90%;
        max-width: 350px;
    }
        @media (max-width: 1024px) {
            h1 {
                font-size: 3rem;
            }
        }

        @media (max-width: 1120px) {
            margin: 9rem 0 0 10%;
        }

        @media (max-width: 1105px) {
            margin: 9rem 0 0 9%;
        }

        @media (max-width: 895px) {
            margin: 6rem 0 0 6%;

            .buttonContainer {
                width: 100%;
            }
        }

        @media (max-width: 821px) {
            margin: 7rem 0 0 0%;

            h1 {
                font-size: 2rem;
            }
            
            p {
                font-size: 1.125rem;
            }

            .buttonContainer {
                flex-direction: column;
            gap: 1rem;
            
            button {
                width: 90%;
            }
            }
        }

        @media (max-width: 600px) {
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            gap: 2rem; 

            p {
                max-width: 100%;
                
                margin: 0 0 0 0;
                padding: 0 0 0 0;
            }

            .buttonContainer {
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                width: 100%;
                max-width: 100%;

                a {
                    width: 100%;
                    max-width: 306px;
                }

                button {
                width: 100%;
                max-width: 100%;
                }

            }
        }
    `






