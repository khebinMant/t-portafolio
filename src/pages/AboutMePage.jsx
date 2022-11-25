import '../styles/AboutMePage.css'
import photo from  '../assets/kevin.jpeg'

export const AboutMePage = () => {
  return (
    <div className="about-me-container">
      <img className='about-image' src={photo}></img>
      <div className='information'>
        <h3>Kevin Alexander Mantilla G</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum rhoncus diam a laoreet. 
        Vivamus finibus arcu vitae lectus bibendum, egestas blandit leo cursus. Sed tincidunt tempor 
        ligula id laoreet. Etiam nec lacinia augue. Vestibulum ante ipsum primis in faucibus orci luctus 
        et ultrices posuere cubilia curae; In id euismod urna.</span>
      </div>
    </div>
  )
}
