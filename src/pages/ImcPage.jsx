import { ImcResult, ImcTable } from "../components/IMC"

export const ImcPage = () => {
  return (
    <div className='imc-content animate__animated animate__fadeIn'>
        <h1>Enter your weight and height</h1>
        <ImcResult />
        <ImcTable />
    </div>
  )
}
