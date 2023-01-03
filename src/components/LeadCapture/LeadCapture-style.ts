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
    left: 108px;

    padding: 3rem;
    background-color: black;

    width: 44rem;
    height:42.37rem;

    p {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        width: 100%;

        margin-top: 3.5rem;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            gap: 1rem;
        }

        input {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 12px 16px;
        }

        textarea {
            resize: none;
        }
    }
`


