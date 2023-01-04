import { HomeContainer, HomeContent } from "./Home-style";
import homeImg from "../../assets/home_img.png"
import { DefaultButton, InvisibleButton } from "../Buttons/Buttons-style";
import branchBgImg from "../../assets/branch_bg.png"
import { Parallax } from 'react-scroll-parallax';


export function Home() {
    return(
        <HomeContainer>

            <Parallax className="paralaxContainer" speed={-10}>
                    <p>Trabalhamos em prol da</p>
                    <strong>Justiça</strong>
            </Parallax>

            <HomeContent>
                <h1>Resolvemos seus problemas jurídicos com advogados experientes</h1>
                <div>
                    <p>Estamos aqui para ajudar a cuidar da sua legalidade com o melhor atendimento especialmente para você</p>
                    <div>
                        <a href=""><DefaultButton>Vamos começar</DefaultButton></a>
                        <a href=""><InvisibleButton>Saber mais</InvisibleButton></a>
                    </div>
                </div>
            </HomeContent>

            <img className="homeBg" src={homeImg} alt="" />
            
            <img src={branchBgImg} alt="" />

        </HomeContainer>
    )
}