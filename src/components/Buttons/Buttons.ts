import styled from 'styled-components'

export const DefaultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.primaryDefault};
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;
  border: none;

  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: ${(props) => props.theme.gray100};

  &:hover {
    background: ${(props) => props.theme.primaryDark};
  }
`
export const InvisibleButton = styled(DefaultButton)`
  background: transparent;
`
export const SmallOutlineButton = styled(DefaultButton)`
  padding: 0.62rem 2rem;
  background: transparent;

  border: 1px solid #ffffff;
  border-radius: 6px;

  &:hover {
    border: 1px solid transparent;
  }
`
export const SmallInvisibleButton = styled(DefaultButton)`
  padding: 0.62rem 2rem;
  background: transparent;

  border: 1px solid transparent;
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme.primaryDark};
  }
`
