import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background: #1c1a22;
  @media (max-width: 820px) {
    overflow-x: hidden;
  }
`

export const SocialLinks = styled.div`
  max-width: 1224px;
  width: 100%;

  position: sticky;
  bottom: 200px;

  margin: -15rem 0 0 1rem;

  @media (max-width: 820px) {
    display: none;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;

    a {
      background: linear-gradient(
            ${(props) => props.theme.gray700},
            ${(props) => props.theme.gray700}
          )
          padding-box,
        ${(props) => props.theme.gradientBorder} border-box;
      border-radius: 8px;
      border: 1px solid transparent;
      z-index: 3;

      border-radius: 8px;

      cursor: pointer;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export const ChatPopup = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 3;

  display: none;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 54px;

  width: 64px;
  height: 64px;

  background: ${(props) => props.theme.gradientBorder};
  filter: drop-shadow(29px 4px 56px rgba(20, 20, 21, 0.25));
  backdrop-filter: blur(12px);

  backdrop-filter: blur(8px);

  @media (max-width: 820px) {
    display: block;
  }
`
