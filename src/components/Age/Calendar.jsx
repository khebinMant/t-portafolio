import { useAgeCalc } from "../../hooks/AgeCalc/useAgeCalc"
import { Results } from "./Results"
import Button from 'react-bootstrap/Button';
import '../../styles/AgeCalPage.css'

export const Calendar = () => {

  const { birthDate, years , months , days , handleDateChange , calcAge} = useAgeCalc()


  return (
    <>
      <div className="calendar-content">
          <input style={{marginRight:'20px'}} type="date" name="fecha" value={birthDate || ''} onChange={handleDateChange}/>
          <Button  onClick={calcAge} variant="secondary">Calcular</Button>{' '}
      </div>
      <Results props={{years, months, days}}/>

    </>
  )
}
