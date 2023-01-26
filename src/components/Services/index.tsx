import { ServiceCard, ServicesContainer, CardContainer } from './style'
import arrowImg from '../../assets/arrow.svg'
import branchBgImg from '../../assets/branch_bg.png'
import cardIconImg1 from '../../assets/card_icon_1.svg'
import cardIconImg2 from '../../assets/card_icon_2.svg'
import cardIconImg3 from '../../assets/card_icon_3.svg'
import cardIconImg4 from '../../assets/card_icon_4.svg'
import cardIconImg5 from '../../assets/card_icon_5.svg'
import cardIconImg6 from '../../assets/card_icon_6.svg'

export function Services() {
  return (
    <ServicesContainer id="services">
      <div className="headerContainer">
        <h2>Nossas áreas de atuação</h2>
        <p>
          Tratamos cada trabalho de forma abrangente e acreditamos na força da
          comunicação clara e fácil.
        </p>
      </div>
      <CardContainer>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg1}
                alt="Direito Empresarial do trabalho"
              />
              <h3>Direito Empresarial do trabalho</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg2}
                alt="Direito de família"
              />
              <h3>Direito de família</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg3}
                alt="Direito tributário"
              />
              <h3>Direito tributário</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg4}
                alt="Direito digital"
              />
              <h3>Direito digital</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg5}
                alt="Registro de marcas e patentes"
              />
              <h3>Registro de marcas e patentes</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img
                width={40}
                height={40}
                src={cardIconImg6}
                alt="Cobrança extrajudicial"
              />
              <h3>Cobrança extrajudicial</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img
            className="arrow"
            src={arrowImg}
            alt="ocultar mostrar conteudo"
          />
        </ServiceCard>
      </CardContainer>

      <img className="branchBg" src={branchBgImg} alt="ramo de fundo" />
    </ServicesContainer>
  )
}
