import { ClockHands, ClockNumbers } from "../components/Clock"
import '../styles/ClockPage.css'


export const ClockPage = () => {
    
    return (
        <div className="clock-page animate__animated animate__fadeIn">
            <div className="clock">
                <ClockHands />
                <ClockNumbers />
            </div>
        </div>
    )
}
