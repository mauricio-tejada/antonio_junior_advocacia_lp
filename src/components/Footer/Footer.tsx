import { FooterContainer, FooterContent } from "./Footer-style";
import logoImg from "../../assets/logo_gray.png"
import textImg from "../../assets/text.png"

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <div>
                    <img src={logoImg} alt="" />
                    <img src={textImg} alt="" />
                </div>
                <nav>
                    <a href="">icon
                    <img src="" alt="" />
                    </a>

                    <a href="">icon
                    <img src="" alt="" />
                    </a>

                    <a href="">icon
                    <img src="" alt="" />
                    </a>
                </nav>
            </FooterContent>
        </FooterContainer>
    )
}