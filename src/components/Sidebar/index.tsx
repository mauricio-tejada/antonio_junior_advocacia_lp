import linkedinImg from '../../assets/in_white.svg'
import faceImg from '../../assets/face-white.svg'
import instaImg from '../../assets/insta-white.svg'
import logoSidebarImg from '../../assets/logo-sidebar.svg'
import { Sidebar as SidebarContainer } from 'primereact/sidebar'
import { SidebarButton, SidebarContent } from './style'
import { useState } from 'react'
import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css'
import hambImg from '../../assets/hamb.svg'

export function Sidebar() {
  const [visibleLeft, setVisibleLeft] = useState(false)

  return (
    <>
      <SidebarButton
        src={hambImg}
        onClick={() => setVisibleLeft(true)}
        alt="mostrar sidebar"
      ></SidebarButton>
      <SidebarContainer
        style={{ background: 'rgba(97, 52, 203, 1)' }}
        visible={visibleLeft}
        fullScreen
        onHide={() => setVisibleLeft(false)}
      >
        <SidebarContent>
          <nav>
            <a href="#depoimentos" onClick={() => setVisibleLeft(false)}>
              Depoimentos
            </a>
            <a href="#contato" onClick={() => setVisibleLeft(false)}>
              Contato
            </a>
            <a href="#services" onClick={() => setVisibleLeft(false)}>
              Áreas de atuação
            </a>
            <a href="#home" onClick={() => setVisibleLeft(false)}>
              Home
            </a>
            <a
              href="http://api.whatsapp.com/send?1=pt_BR&phone=55051991276728"
              target="_blank"
              rel="noreferrer"
            >
              Entrar em contato
            </a>

            <nav className="socialNav">
              <a href="">
                <img src={linkedinImg} alt="linkedin" />
              </a>
              <a href="">
                <img src={faceImg} alt="facebook" />
              </a>
              <a href="">
                <img src={instaImg} alt="instagram" />
              </a>
            </nav>
          </nav>
          <footer>
            <img src={logoSidebarImg} alt="logomarca Antonio" />
            <p>
              Empresa de advocacia especializada em resolver problemas
              jurídicos.
            </p>
          </footer>
        </SidebarContent>
      </SidebarContainer>
    </>
  )
}
