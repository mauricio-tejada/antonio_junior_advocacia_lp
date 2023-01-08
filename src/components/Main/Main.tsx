import { CTA } from "../CTA/CTA";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";
import { LeadCapture } from "../LeadCapture/LeadCapture";
import { Services } from "../Services/Services";
import { SocialProof } from "../SocialProof/SocialProof";
import { ChatPopup, MainContainer, SocialLinks } from "./Main-style";
import linkedinImg from "../../assets/linkedin_icon.png"
import faceImg from "../../assets/face_icon.png"
import instaImg from "../../assets/insta_icon.png"
import wppImg from "../../assets/wpp-icon.png"
import { Sidebar } from "../Sidebar/Sidebar";

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
                        <a href=""><img src={linkedinImg} alt="" /></a>
                        <a href=""><img src={faceImg} alt="" /></a>
                        <a href=""><img src={instaImg} alt="" /></a>
                    </nav>
            </SocialLinks>
            <ChatPopup>
                <img src={wppImg} alt="" />
            </ChatPopup>
            <SocialProof />
            <LeadCapture />
            <Footer />
        </MainContainer>
    )
}