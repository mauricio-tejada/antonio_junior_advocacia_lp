import { SidebarContainer } from "./Sidebar-styles";
import linkedinImg from "../../assets/in-white.png"
import faceImg from "../../assets/face-white.png"
import instaImg from "../../assets/insta-white.png"
import logoSidebarImg from "../../assets/logo-sidebar.png"

export function Sidebar() {
    return(
        <SidebarContainer>
            <header>
                <p>Menu</p>
                <div className="closeIcon">
                    <div className="bar1"> </div>
                    <div className="bar2"> </div>
                </div>
            </header>
            <nav>
                <a href="">Depoimentos</a>
                <a href="">Contato</a>
                <a href="">Áreas de atuação</a>
                <a href="">Home</a>
                <a href="">Entrar em contato</a>

                <nav className="socialNav">
                    <a href=""><img src={linkedinImg} alt="" /></a>
                    <a href=""><img src={faceImg} alt="" /></a>
                    <a href=""><img src={instaImg} alt="" /></a>
                </nav>
            </nav>
            <footer>
                <img src={logoSidebarImg} alt="" />
                <p>Empresa de advocacia especializada em resolver problemas jurídicos.</p>
            </footer>
        </SidebarContainer>
    )
}