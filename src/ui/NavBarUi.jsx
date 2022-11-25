import Container from '@mui/material/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
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
      <Navbar className='bar-content' bg="light">
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
                      <Link className='logo-text' to={page.to}><p>{page.name}</p></Link>
                  </div>
                  </div>
                  :
                  <Link className='link-nav' to={page.to}><p>{page.name}</p></Link>
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
