import { Calendar } from "../components/Age"
import '../styles/AgeCalPage.css'

export const AgeCalcPage = () => {
  return (
    <div className="age-content animate__animated animate__fadeIn">
      <h1>Enter your BirthDate</h1>
      <Calendar />
    </div>
  )
}
