import React,{useState,useEffect} from 'react'
import './Timer.css'

const Timer = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = 'January, 1, ' + (new Date().getFullYear() + 1);

    const updateTime = () =>{
        //convert deadline to object
        const newYearDate = Date.parse(deadline);
        
        //time till new year in ms
        const remainingTime = newYearDate - Date.now();
        setDays(Math.floor(remainingTime/1000/60/60/24));
        setHours(Math.floor((remainingTime/1000/60/60)%24));
        setMinutes(Math.floor((remainingTime/1000/60)%60));
        setSeconds(Math.floor((remainingTime/1000)%60));
       
    }

    useEffect(() =>{
        const interval = setInterval(()=>{
            updateTime();
        }, 1000)

        return () => clearInterval(interval)
    },[])
  return (
    <div className='timer'>
        <h1>Happy new year in</h1>
        <div className='col-4'>
            <p id='day'>{days}</p>
            <span className="text">Days</span>
        </div>

        <div className='col-4'>
            <p id='hour'>{hours}</p>
            <span className="text">Hours</span>
        </div>

        <div className='col-4'>
            <p id='minute'>{minutes}</p>
            <span className="text">Minutes</span>
        </div>

        <div className='col-4'>
            <p id='seconds'>{seconds}</p>
            <span className="text">Seconds</span>
        </div>
    </div>
  )
}

export default Timer