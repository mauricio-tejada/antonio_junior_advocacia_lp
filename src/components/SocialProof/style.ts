import styled from 'styled-components'

export const SocialProofContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  margin-bottom: 10rem;
  margin-top: 10rem;
  padding: 6.5rem 2rem 0 2rem;

  width: 100%;
  max-width: 1224px;

  .branchImg {
    position: absolute;
    left: -8%;
    top: -60%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    .branchImg {
      display: none;
    }

    button {
      align-self: center;
      width: 100%;
      max-width: 312px !important;
    }

    h1 {
      font-size: 3rem;
    }

    h1 ~ p {
      text-align: center;
    }
  }

  @media (max-width: 670px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 470px) {
    margin-bottom: 2rem;

    h1 ~ p {
      text-align: left;
    }
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  z-index: 1;

  p {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;

    color: ${(props) => props.theme.gray300};
    max-width: 392px;
  }

  a {
    display: flex;
    justify-content: flex-start;
  }

  button {
    max-width: 195px;
    margin-top: 1.5rem;
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
  @media (max-width: 1024px) {
    a {
      justify-content: center;
      max-width: 100%;
      width: 100%;
    }
    button {
      max-width: 100%;
      width: 100%;
    }
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  position: relative;

  .currentCard {
    transform: scale(1);
    position: absolute;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 670px) {
    flex-direction: column;

    gap: 2rem;
    width: 100%;

    .currentCard {
      position: static;
      z-index: 0;
    }
  }
`

export const SocialProofCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: scale(0.7);

  background: linear-gradient(
        ${(props) => props.theme.gray700},
        ${(props) => props.theme.gray700}
      )
      padding-box,
    ${(props) => props.theme.gradientBorder} border-box;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: 16px 0px 48px rgba(20, 20, 21, 0.25),
    -16px 0px 48px rgba(20, 20, 21, 0.25);

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

      color: ${(props) => props.theme.gray050};
    }
  }

  .content {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;

    color: ${(props) => props.theme.gray300};
  }

  @media (max-width: 670px) {
    transform: scale(1);
  }
`
