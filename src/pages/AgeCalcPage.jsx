import { Calendar } from "../components/Age"
import '../styles/AgeCalPage.css'

export const AgeCalcPage = () => {
  return (
    <div className="age-content animate__animated animate__fadeIn">
      <h1>Enter your birth date</h1>
      <Calendar />
    </div>
  )
}
