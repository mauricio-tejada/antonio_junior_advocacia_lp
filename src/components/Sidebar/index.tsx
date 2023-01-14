import linkedinImg from '../../assets/in-white.png'
import faceImg from '../../assets/face-white.png'
import instaImg from '../../assets/insta-white.png'
import logoSidebarImg from '../../assets/logo-sidebar.png'
import { Sidebar as SidebarContainer } from 'primereact/sidebar'
import { SidebarButton, SidebarContent } from './style'
import { useState } from 'react'
import 'primereact/resources/themes/lara-light-indigo/theme.css' // theme
import 'primereact/resources/primereact.min.css' // core css
import 'primeicons/primeicons.css'
import hambImg from '../../assets/hamb.png'

export function Sidebar() {
  const [visibleLeft, setVisibleLeft] = useState(false)

  return (
    <>
      <SidebarButton
        src={hambImg}
        onClick={() => setVisibleLeft(true)}
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
                <img src={linkedinImg} alt="" />
              </a>
              <a href="">
                <img src={faceImg} alt="" />
              </a>
              <a href="">
                <img src={instaImg} alt="" />
              </a>
            </nav>
          </nav>
          <footer>
            <img src={logoSidebarImg} alt="" />
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
