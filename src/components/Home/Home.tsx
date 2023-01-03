import { HomeContainer, HomeContent, Popup } from "./Home-style";
import homeImg from "../../assets/home_img.png"
import { DefaultButton, InvisibleButton } from "../Buttons/Buttons-style";
import branchBgImg from "../../assets/branch_bg.png"

export function Home() {
    return(
        <HomeContainer>
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

            <Popup>
                <p>Trabalhamos em prol da</p>
                <strong>Justiça</strong>
            </Popup>

            <img src={homeImg} alt="" />
            
            <img src={branchBgImg} alt="" />

        </HomeContainer>
    )
}