
import { ServiceCard, ServicesContainer, CardContainer, Header } from "./Services-style";
import cardIconImg from "../../assets/card_icon.png"

export function Services() {
    return (
        <ServicesContainer>
            <Header>
                <h2>Nossas áreas de atuação</h2>
                <p>Tratamos cada trabalho de forma abrangente e acreditamos na força da comunicação clara e fácil.</p>
            </Header>
            <CardContainer>
                <ServiceCard>
                    <div>
                        <div>
                            <img src={cardIconImg} alt="" />
                            <h3>Per aptent fusce dictum fusce</h3>
                        </div>
                        <p>quisque suscipit	per quisque suscipita ptent fusce dictum porttitor auctor suscipit a adipiscing quisque suscipit.</p>
                        <p>225 Casos solucionados</p>
                    </div>
                    <img src="" alt="" />
                </ServiceCard>
            </CardContainer>
        </ServicesContainer>
    )
}