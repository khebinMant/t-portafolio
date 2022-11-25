import '../styles/AboutMePage.css'
import photo from  '../assets/kevin.jpeg'

export const AboutMePage = () => {
  return (
    <div className="about-me-container">
      <img alt="Kevin M"className='about-image' src={photo}></img>
      <div className='information animate__fadeInDown'>
        <h3>Kevin Alexander Mantilla G</h3>
        <span>
          Hi, I'm a Software Developer From Quito-Ecuador

        </span>
      </div>
    </div>
  )
}
