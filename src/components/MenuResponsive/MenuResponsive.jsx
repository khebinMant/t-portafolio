import { NavLink } from 'react-router-dom'

export const MenuResponsive = ({setOpenModal, openModal}) => {
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
  return (
        <div className='full-content animate__animated animate__fadeIn'>
            <div onClick={()=>setOpenModal(false)} className='container-burguer'>
                <div  className='burguer-buttom'></div>
                <div  className='burguer-buttom'></div>
                <div  className='burguer-buttom'></div>
            </div>
          <div>
            {
              pages.map(page=>(
                <div className='responsive-nav'>
                {
                  page.name==='KrugerStar'
                  ?
                  <>
                  </>
                  :
                  <div>
                    <NavLink
                      onClick={()=>setOpenModal(false)} 
                      className={({isActive})=>`${isActive?'link-nav-active':'link-nav'}`}
                      to={page.to}><b className='routes-responsive'><p>{page.name}</p></b>
                    </NavLink>
                  </div>
                }
                </div>
              ))
            }
          <div className='line'></div>
          </div>
    </div>
  )
}
