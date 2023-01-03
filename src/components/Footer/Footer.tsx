import { FooterContainer, FooterContent } from "./Footer-style";
import logoHeaderImg from "../../assets/logo_header.svg"

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <div>
                    <img src={logoHeaderImg} alt="" />
                    <p>Antônio Júnior Advocacía e consultoria jurídica</p>
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