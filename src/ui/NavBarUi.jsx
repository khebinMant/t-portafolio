import Container from '@mui/material/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import '../styles/NavBarUi.css'
import logo from  '../assets/kruger.png'

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

  return (
    <>
      <Navbar className='bar-content'>
        <Container>
          <div className='title-routes'>
            {
              pages.map(page=>(
                <>
                {
                  page.name==='KrugerStar'
                  ?
                  <div>
                  <div className='center-logo'>
                      <img className='logo' src={logo} ></img>
                      <NavLink className='logo-text' to={page.to}><p>{page.name}</p></NavLink>
                  </div>
                  </div>
                  :
                  <NavLink 
                  className={({isActive})=>`${isActive?'link-nav-active':'link-nav'}`}
                   to={page.to}><p>{page.name}</p></NavLink>
                }
                </>
              ))
            }
          <div className='line'></div>
          </div>
        </Container>
      </Navbar>
    </>

  );
}
