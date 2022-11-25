import { Calendar } from "../components/Age"
import '../styles/AgeCalPage.css'

export const AgeCalcPage = () => {
  return (
    <div className="age-content">
      <h3>Ingresa tu fecha de nacimiento</h3>
      <Calendar />
    </div>
  )
}
