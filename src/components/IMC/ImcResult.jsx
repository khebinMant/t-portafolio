import { useImc } from '../../hooks/IMC/useImc'
import { Inputs } from './Inputs'
import  '../../styles/ImcPage.css'

export const ImcResult = () => {

    const { result, 
            imcMesure, 
            kgMesure, 
            heightMesure, 
            handleKgChange, 
            handleHeightChange } = useImc()

    return (
        <div style={{backgroundColor:`${result.color}`}} className='result-content'>
            
            <div className='slider-container'>
                <Inputs props={{value:kgMesure, onChange:handleKgChange, option:'kg', min:0, max:400}}/>
                <Inputs props={{value:heightMesure, onChange:handleHeightChange, option:'m', min:0, max:250}}/>
            </div>
            <div className='result-stats'>
                <p><b>Índice de masa corporal:</b> {imcMesure}</p>
                <p><b>Clasificación:</b> {result.clasificacion}</p>
                <p><b>Riesgo:</b> {result.riesgo}</p>
            </div>
            
        </div>
  )
}
