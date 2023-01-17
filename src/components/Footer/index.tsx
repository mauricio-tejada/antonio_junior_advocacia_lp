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
          <img src={logoImg} alt="" />
          <div>
            <p>Antônio Júnior ©</p>
            <p>Advocacia e consultoria jurídica</p>
          </div>
        </div>
        <nav>
          <a href="">
            <img src={linkedinImg} alt="" />
          </a>
          <a href="">
            <img src={faceImg} alt="" />
          </a>
          <a href="">
            <img src={instaImg} alt="" />
          </a>
        </nav>
      </FooterContent>
    </FooterContainer>
  )
}