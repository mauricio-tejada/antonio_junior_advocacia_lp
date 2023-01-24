import { CTA } from '../CTA'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Home } from '../Home'
import { LeadCapture } from '../LeadCapture'
import { Services } from '../Services'
import { SocialProof } from '../SocialProof'
import { ChatPopup, MainContainer, SocialLinks } from './style'
import linkedinImg from '../../assets/linkedin_icon.png'
import faceImg from '../../assets/face_icon.png'
import instaImg from '../../assets/insta_icon.png'
import wppImg from '../../assets/wpp-icon.png'
import { Sidebar } from '../Sidebar'

export function Main() {
  return (
    <MainContainer>
      <Header />
      <Sidebar />
      <Home />
      <Services />
      <CTA />
      <SocialLinks>
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
      </SocialLinks>
      <ChatPopup>
        <a
          href="http://api.whatsapp.com/send?1=pt_BR&phone=55000000000000"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wppImg} alt="whatsapp" />
        </a>
      </ChatPopup>
      <SocialProof />
      <LeadCapture />
      <Footer />
    </MainContainer>
  )
}
