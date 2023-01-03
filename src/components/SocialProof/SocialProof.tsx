import { CardContainer, Content, SocialProofCard, SocialProofContainer } from "./SocialProof-style";

export function SocialProof() {
    return (
        <SocialProofContainer>
            <Content>
                <h1>Depoimentos de nossos clientes</h1>
                <p>Muitos clientes estão felizes em trabalhar conosco e estão apreciando nosso trabalho. </p>
                <button>Fale conosco</button>
            </Content>
            <CardContainer>
                <SocialProofCard>card</SocialProofCard>
            </CardContainer>
        </SocialProofContainer>
    )
}