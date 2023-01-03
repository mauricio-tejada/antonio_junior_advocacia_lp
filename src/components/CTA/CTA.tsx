import { Content, CTAContainer } from "./CTA-style";
import nodeImg from "../../assets/node_img.svg"


export function CTA() {
    return (
        <CTAContainer>
            <Content>
                    <img src={nodeImg} alt="" />
                <div>
                    <h1>Sua justiça é a nossa prioridade</h1>
                    <p>Garantimos a defesa de seus direitos e podemos ajudá-lo a encontrar a solução ideal para o seu problema. Entre em contato conosco para obter mais informações.   </p>
                    <button>Entrar em contato</button>
                </div>
            </Content>
        </CTAContainer>
    )
}