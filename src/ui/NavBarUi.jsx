import Container from '@mui/material/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import '../styles/NavBarUi.css'
import logo from  '../assets/kruger.png'
import { useState } from 'react';
import { MenuResponsive } from '../components/MenuResponsive/MenuResponsive';

const pages = [
  {
    to:'home',
    name:'Home'
  },
  {
    to:'imc',
    name:'IMC Calculator'
  },
  {
    to:'age',
    name:'Age calculator'
  },
  {
    to:'home',
    name:'KrugerStar',
    imgae:''
  },
  {
    to:'clock',
    name:'My Clock'
  },
  {
    to:'about-me',
    name:'About me'
  },
  {
    to:'contact',
    name:'Contact'
  },
];

export const  NavBarUi=()=> {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
    {
      openModal
      ?
      <MenuResponsive setOpenModal={setOpenModal} openModal={openModal}/>
      :
      <Navbar className='bar-content animate__animated animate__fadeIn'>
        <Container>
            <div className='container-logo-responsive'>
              <img alt='Kruger logo' className='logo-responsive' src={logo} ></img>
            </div>
            <div onClick={()=>setOpenModal(true)} className='container-burguer'>
              <div  className='burguer-buttom'></div>
              <div  className='burguer-buttom'></div>
              <div  className='burguer-buttom'></div>
            </div>
            <div className='title-routes'>
              {
                pages.map(page=>(
                  <>
                  {
                    page.name==='KrugerStar'
                    ?
                    <div className='center-logo'>
                        <img alt='Kruger logo' className='logo' src={logo} ></img>
                        <NavLink 
                          className='logo-text' 
                          to={page.to}><p><b>{page.name}</b></p>
                        </NavLink>
                    </div>
                    :
                    <NavLink 
                      className={({isActive})=>`${isActive?'link-nav-active':'link-nav'}`}
                      to={page.to}><b><p>{page.name}</p></b>
                    </NavLink>
                  }
                  </>
                ))
              }
            <div className='line'></div>
            </div>
        </Container>
      </Navbar>
    }
    </>
  );
}
