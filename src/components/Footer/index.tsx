import { FooterContainer, FooterContent } from './style'
import logoImg from '../../assets/logo_gray.png'
import linkedinImg from '../../assets/linkedin_icon.png'
import faceImg from '../../assets/face_icon.png'
import instaImg from '../../assets/insta_icon.png'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <img src={logoImg} alt="logomarca antonio" />
          <div>
            <p>Antônio Júnior ©</p>
            <p>Advocacia e consultoria jurídica</p>
          </div>
        </div>
        <nav>
        <a target="_blank" href="https://www.linkedin.com/in/antonio-junior-adv/">
            <img src={linkedinImg} alt="linkedin" />
          </a>
          <a target="_blank" href="https://www.facebook.com/antoniojradv">
            <img src={faceImg} alt="facebook" />
          </a>
          <a target="_blank" href="https://www.instagram.com/antoniojunioradvocacia/">
            <img src={instaImg} alt="instagram" />
          </a>
        </nav>
      </FooterContent>
    </FooterContainer>
  )
}
