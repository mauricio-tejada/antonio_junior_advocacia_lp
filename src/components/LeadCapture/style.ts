import styled from 'styled-components'
import { preprocess } from 'zod'
import formBgImg from '../../assets/form_bg.svg'

interface InputProps {
  onEmpty?: Boolean
}

export const LeadCaptureContainer = styled.section`
  width: 100%;
  height: 542px;

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

  padding: 0 2rem 0 2rem;

  @media (max-width: 400px) {
    padding: 0 1rem 0 1rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  padding: 3rem;

  background: ${(props) => props.theme.gradientDark};
  filter: drop-shadow(29px 4px 56px rgba(20, 20, 21, 0.48));
  backdrop-filter: blur(12px);
  border-radius: 8px;

  width: 100%;
  max-width: 44rem;
  height: 42.37rem;

  h2 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 125%;

    color: ${(props) => props.theme.gray100};

    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;

    color: ${(props) => props.theme.gray050};
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    width: 100%;

    margin-top: 3.5rem;

    @media (max-width: 700px) {
      gap: 1rem;
    }

    button {
      width: 100%;
      max-width: 280px;
    }
  }
`

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex: 1;
  gap: 2rem;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  p {
    height: 0.75rem;
    font-size: 0.75rem;
  }
`

export const Input = styled.input<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.75rem 1rem;
  width: 100%;

  color: ${(props) => props.theme.gray100};

  border: 2px solid;
  border-color: ${(props) => props.onEmpty ? '#E55757' : props.theme.gray300};
  border-radius: 6px;

  background: transparent;
  transition: background-color 0.5s;

  &::placeholder {
    color: ${(props) => props.theme.gray100};
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
  }

  &:hover {
    background: ${(props) => props.theme.gray600};
  }

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    border-color: ${(props) => props.theme.primaryDefault};
  }
`

export const TextArea = styled.textarea<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.75rem 1rem;
  width: 100%;

  color: ${(props) => props.theme.gray100};

  border: 2px solid;
  border-color: ${(props) => props.onEmpty ? '#E55757' : props.theme.gray300};
  border-radius: 6px;
  background: transparent;

  transition: background-color 0.5s;

  &::placeholder {
    color: ${(props) => props.theme.gray100};
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
  }

  &:hover {
    background: ${(props) => props.theme.gray600};
  }

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
    border-color: ${(props) => props.theme.primaryDefault};
  }

  resize: none;
  width: 100%;
`