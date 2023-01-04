import { Content, CTAContainer } from "./CTA-style";
import ctaImg from "../../assets/CTA.png"
import { DefaultButton } from "../Buttons/Buttons-style";
import branchBgImg from "../../assets/branch_bg.png"



export function CTA() {
    return (
        <CTAContainer>
            <Content>
                    <img src={ctaImg} alt="" />
                <div>
                    <h1>Sua justiça é a nossa prioridade</h1>
                    <p>Garantimos a defesa de seus direitos e podemos ajudá-lo a encontrar a solução ideal para o seu problema. Entre em contato conosco para obter mais informações.</p>
                    <DefaultButton>Entrar em contato</DefaultButton>
                </div>
            <img className="branchBg" src={branchBgImg} alt="" />
            </Content>
        </CTAContainer>
    )
}