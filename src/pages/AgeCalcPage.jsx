import { Calendar } from "../components/Age"
import '../styles/AgeCalPage.css'

export const AgeCalcPage = () => {
  return (
    <div className="age-content animate__fadeInDown">
      <h1>Enter your first and last name</h1>
      <Calendar />
    </div>
  )
}
