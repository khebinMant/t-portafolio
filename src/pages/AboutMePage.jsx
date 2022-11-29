import '../styles/AboutMePage.css'
import photo from  '../assets/kevin.jpeg'

export const AboutMePage = () => {
  return (
    <div className="about-me-container animate__animated animate__fadeIn">
      <img alt="Kevin M"className='about-image' src={photo}></img>
      <div className='information animate__fadeInDown'>
        <h3>Kevin Alexander Mantilla G</h3>
        <span>
          Hi, I'm a Software Developer From Quito-Ecuador
          currently I am beign partf of Kruger Star contest, I have some skills as
          FrontEnd developer specially with React JS and Angular, also I have some skills as 
          BackEnd developer with JAVA using spring boot, php using Laravel, python using Odoo and Django, and 
          javascript using Node Js with Express.
          
          I always want to learn something new and educate myself.
        </span>
      </div>
    </div>
    
  )
}
