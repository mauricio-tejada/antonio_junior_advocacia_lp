import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-height: 100px;
  height: 100px;

  z-index: 6;
  position: fixed;
  top: 0;
  left: 0;

  padding: 0 1rem 0 1rem;

  background: ${(props) => props.theme.gradientDark};
  filter: drop-shadow(4px 21px 32px rgba(20, 20, 21, 0.25));
  backdrop-filter: blur(8px);

  @media (max-width: 600px) {
    max-height: 72px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 100%;
    width: 100%;
  }

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

  @media (max-width: 360px) {
    a > img {
      width: 32px;
    }
  }
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1224px;
  height: 100%;
  margin: 0 auto;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  @media (max-width: 950px) {
    nav {
      display: none;
    }
  }
`
