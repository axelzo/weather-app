import React from 'react';
import './Card.css'

function Card({date,day}) {

  const forecast = {
    "date": "2019-08-18",
    "date_epoch": 1566086400,
    "day": {
        "maxtemp_c": 29.9,
        "maxtemp_f": 85.8,
        "mintemp_c": 16.1,
        "mintemp_f": 61,
        "avgtemp_c": 22.5,
        "avgtemp_f": 72.5,
        "maxwind_mph": 4.7,
        "maxwind_kph": 7.6,
        "totalprecip_mm": 7.4,
        "totalprecip_in": 0.29,
        "avgvis_km": 9.4,
        "avgvis_miles": 5,
        "avghumidity": 76,
        "condition": {
            "text": "Patchy rain possible",
            "icon": "//cdn.apixu.com/weather/64x64/day/176.png",
            "code": 1063
        },
        "uv": 12.9
    }
  }


  console.log("Card ",day, date); 
  return (
   
    <div className="card">
      <p className="card__date">{date}</p> 
      <img src={day.condition.icon} alt="Avatar" className="card__image"/>
      <div className="container">
        <h4><b>{`${day.maxtemp_c} / ${day.mintemp_c}`}</b></h4> 
        <p>{day.condition.text}</p> 
  </div>
    </div>
  );
}
export default Card;