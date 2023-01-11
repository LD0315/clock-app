import {useState, useEffect} from 'react';
import "./styles.css";

export default function App() {

  const [time, setTime] = useState('')

  // Add a '0' if the value is a one digit number
  function formatTime(val) {
    if(val < 10) {
      return '0'
    } else {
      return '';
    }
  }

  // Set an interval for our clock tick function
  useEffect(() => {
    //Interval
    const timerID = setInterval(
      () => tick(), 1000)

      //Cleanup
      return function cleanup() {
        clearInterval(timerID)
      }
  })

  // Clock Tick Function
  function tick() {
    //Data variables 
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    //Set the state to the formated time
    setTime(formatTime(h) + h + ':' + formatTime(m) + 
    m + ':' + formatTime(s) + s);
  }


   //Return the JSX
   //Insert the state
   return (
    <div className="clock">
      <div className="screen">
        <h1 className="time">{time}</h1>
      </div>
    </div>
   )
}