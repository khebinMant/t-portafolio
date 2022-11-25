import { ImcResult, ImcTable } from "../components/IMC"

export const ImcPage = () => {
  return (
    <div className='body-content'>
        <h3>Ingresa tu peso y tu altura </h3>
        <ImcResult />
        <ImcTable />
    </div>
  )
}
