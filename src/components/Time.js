import { useState } from "react";


const Time = () => {

  const [color,setColor] = useState('black')
  const [hour,setHour] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [second,setSecond] = useState(0);
  const [AMPM,setAMPM] = useState(0);

  const getTime = () => {
    const date = new Date()
    setAMPM(date.getHours() >= 12 ? "PM" : "AM");
    setHour(date.getHours() % 12 || 12);
    setMinutes(date.getMinutes());
    setSecond(date.getSeconds());
    
  }

  setInterval(() => {
    getTime()
  }, 1000);
  

  return(

    <div className="time-wrapper" style={{backgroundColor:color}}>
        <h1 className="time"><p>{hour}</p> : <p>{minutes}</p> : <p>{second}</p> : <p>{AMPM}</p></h1>
    </div>
  )
}

export default Time