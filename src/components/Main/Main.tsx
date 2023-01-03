import { CTA } from "../CTA/CTA";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";
import { LeadCapture } from "../LeadCapture/LeadCapture";
import { Services } from "../Services/Services";
import { SocialProof } from "../SocialProof/SocialProof";
import { MainContainer } from "./Main-style";

export function Main() {
    return (
        <MainContainer>
            <Header />
            <Home />
            <Services />
            <CTA />
            <SocialProof />
            <LeadCapture />
            <Footer />
        </MainContainer>
    )
}