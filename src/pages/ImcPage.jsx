import { ImcResult, ImcTable } from "../components/IMC"

export const ImcPage = () => {
  return (
    <div className='imc-content'>
        <h1>Enter your weight and height</h1>
        <ImcResult />
        <ImcTable />
    </div>
  )
}
