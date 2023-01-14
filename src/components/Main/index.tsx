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
      </SocialLinks>
      <ChatPopup>
        <a
          href="http://api.whatsapp.com/send?1=pt_BR&phone=55000000000000"
          target="_blank"
          rel="noreferrer"
        >
          <img src={wppImg} alt="" />
        </a>
      </ChatPopup>
      <SocialProof />
      <LeadCapture />
      <Footer />
    </MainContainer>
  )
}
