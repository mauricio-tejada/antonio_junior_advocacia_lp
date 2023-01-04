import styled from "styled-components";
import formBgImg from "../../assets/form_bg.svg"

export const LeadCaptureContainer = styled.section`
   width: 100%;
   height: 542px;
   position: relative;

   background-image: url(${formBgImg});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;

   margin-bottom: 12.5rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
   `

export const Content = styled.div`
    width: 100%;
    max-width: 1224px;

    position: relative;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    position: absolute;
    top: -350px;
    left: 0;
    
    padding: 3rem;
    
    background: ${props => props.theme.gradientDark};
    filter: drop-shadow(29px 4px 56px rgba(20, 20, 21, 0.48));
    backdrop-filter: blur(12px);
    border-radius: 8px;
    
    width: 44rem;
    height:42.37rem;
    
    h2 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 2.5rem;
        line-height: 125%;
    
        color: ${props => props.theme.gray100};
    }

    p {
        text-align: center;

        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 150%;

        color: ${props => props.theme.gray050};

    }
    
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        width: 100%;

        margin-top: 3.5rem;


        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            flex: 1;
            gap: 1rem;
            width: 100%;
        }

        input, textarea {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 0.75rem 1rem;
            width: 100%;

            color: ${props => props.theme.gray100};

            border: 2px solid;
            border-color: ${props => props.theme.gray300};
            border-radius: 6px;
            background: transparent;

            &::placeholder {
                color: ${props => props.theme.gray100};
                font-family: 'Fira Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 1rem;
                line-height: 150%;
            }

            &:hover {
                background: ${props => props.theme.gray600};
            }

            &:focus {
                box-shadow: 0 0 0 0;
                outline: 0;
                border-color: ${props => props.theme.primaryDefault};

            }

        }

        textarea {
            resize: none;
            width: 100%;
        }

        button {
            max-width: 237px;
        }
    }
`


