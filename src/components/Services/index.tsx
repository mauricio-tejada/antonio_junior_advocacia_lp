import { ServiceCard, ServicesContainer, CardContainer } from './style'
import arrowImg from '../../assets/arrow.png'
import branchBgImg from '../../assets/branch_bg.png'
import cardIconImg1 from '../../assets/card_icon_1.png'
import cardIconImg2 from '../../assets/card_icon_2.png'
import cardIconImg3 from '../../assets/card_icon_3.png'
import cardIconImg4 from '../../assets/card_icon_4.png'
import cardIconImg5 from '../../assets/card_icon_5.png'
import cardIconImg6 from '../../assets/card_icon_6.png'

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
              <img src={cardIconImg1} alt="" />
              <h3>Direito Empresarial do trabalho</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img className="arrow" src={arrowImg} alt="" />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img src={cardIconImg2} alt="" />
              <h3>Direito de família</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img className="arrow" src={arrowImg} alt="" />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img src={cardIconImg3} alt="" />
              <h3>Direito tributário</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img className="arrow" src={arrowImg} alt="" />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img src={cardIconImg4} alt="" />
              <h3>Direito digital</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img className="arrow" src={arrowImg} alt="" />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img src={cardIconImg5} alt="" />
              <h3>Registro de marcas e patentese</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img className="arrow" src={arrowImg} alt="" />
        </ServiceCard>
        <ServiceCard>
          <div className="contentContainer">
            <div className="header">
              <img src={cardIconImg6} alt="" />
              <h3>Cobrança extrajudicial</h3>
            </div>
            <p className="description">
              quisque suscipit per quisque suscipita ptent fusce dictum
              porttitor auctor suscipit a adipiscing quisque suscipit.
            </p>
            <p className="casesCount">225 Casos solucionados</p>
          </div>
          <img className="arrow" src={arrowImg} alt="" />
        </ServiceCard>
      </CardContainer>

      <img className="branchBg" src={branchBgImg} alt="" />
    </ServicesContainer>
  )
}