import {useState } from 'react'

export const useClock = () => {

    const [secondsGrades, setSecondsGrades] = useState(new Date().getSeconds()*6)
    const [minutesGrades, setMinutesGrades] = useState(new Date().getMinutes()*6)
    const [hoursGrades, setHoursGrades] = useState(new Date().getHours()*30 + new Date().getMinutes()/2)

    const getGrades = ()=>{
        setInterval(()=>{
            const now = new Date();

            setSecondsGrades(now.getSeconds()*6)
            setMinutesGrades(now.getMinutes()*6)
            setHoursGrades(now.getHours()*30+ now.getMinutes()/2)
        }, 1000);
    }
    
    getGrades()
    
  return {
    secondsGrades,
    minutesGrades,
    hoursGrades
  }
}
