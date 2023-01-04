import { DefaultButton } from "../Buttons/Buttons-style";
import { Content, FormContainer, LeadCaptureContainer } from "./LeadCapture-style";

export function LeadCapture() {
    return (
        <LeadCaptureContainer>
            <Content>
                <FormContainer>
                    <h2>Realize sua consulta sem custo</h2>
                    <p>Fale um pouco sobre o seu problema jurídico, assim que nossa equipe avaliar, entraremos em contato!</p>
                    <form action="">
                        <div>
                            <input type="text" placeholder="Primeiro nome"/>
                            <input type="text" placeholder="Último nome"/>
                        </div>

                        <div>
                            <input type="text" placeholder="E-mail"/>
                            <input type="text" placeholder="Número de telefone"/>
                        </div>

                        <textarea name="" cols={25} rows={10} placeholder="Conte um pouco sobre o seu caso..."></textarea>

                        <DefaultButton type="submit">Enviar consulta gratuita</DefaultButton>
                    </form>
                </FormContainer>
            </Content>
        </LeadCaptureContainer>
    )
}