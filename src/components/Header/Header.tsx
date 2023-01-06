import { HeaderContainer, HeaderContent, LogoContainer } from "./Header-style";
import logoSmallImg from "../../assets/logo_small.png"
import logoExtendsImg from "../../assets/logo_extends.png"
import hambImg from "../../assets/hamb.png"
import { SmallInvisibleButton, SmallOutlineButton } from "../Buttons/Buttons-style";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <LogoContainer>
                    <a href=""><img src={logoSmallImg} alt="" /></a>
                    <a href=""><img src={logoExtendsImg} alt="" /></a>
                </LogoContainer>
                <nav>
                    <a href="#depoimentos"><SmallInvisibleButton>Depoimentos</SmallInvisibleButton></a>
                    <a href=""><SmallInvisibleButton>Contato</SmallInvisibleButton></a>
                    <a href=""><SmallInvisibleButton>Áreas de atuação</SmallInvisibleButton></a>
                    <a href=""><SmallInvisibleButton>Home</SmallInvisibleButton></a>
                    <a href=""><SmallOutlineButton>Entrar em contato</SmallOutlineButton></a>
                </nav>
                <a href=""><img src={hambImg} alt="" /></a>
            </HeaderContent>
        </HeaderContainer>
    )
}