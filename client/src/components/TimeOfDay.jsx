import React, { useState, useEffect } from 'react'
import './timeOfDay.scss';
const TimeOfDay = () => {
 const [day, setDay] = useState('');
 const [timeOfday, setTimeOfDay] = useState('');


 const date = new Date();
 const time = date.getDay()
 const hours = date.getHours()


 const hoursOfDay = () => {
  let timeOfday;
  if (hours >= 0 && hours <= 6) {
   timeOfday = 'Late Night'
  } else if (hours >= 7 && hours <= 12) {
   timeOfday = 'Morning'
  } else if (hours >= 13 && hours <= 17) {
   timeOfday = 'Afternoon'
  } else {
   timeOfday = 'Night'
  }
  return timeOfday
 }

 const dayOfWeek = () => {
  let day;
  switch (time) {
   case 0:
    day = 'Sunday';
    break;
   case 1:
    day = 'Monday';
    break;
   case 2:
    day = 'Tuesday';
    break;
   case 3:
    day = 'Wednesday';
    break;
   case 4:
    day = 'Thursday';
    break;
   case 5:
    day = 'Friday';
    break;
   case 6:
    day = 'Saturday';
  }
  return day;
 }
 useEffect(() => {
  setDay(dayOfWeek)
  setTimeOfDay(hoursOfDay);
 }, [])


 return (
  <div className="timeOfDay">
   <p className="timeOfDay--p">It's {day} {timeOfday}</p >
  </div >
 )
}
export default TimeOfDay;