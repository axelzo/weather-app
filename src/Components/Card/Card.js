import React from 'react';
import './Card.css'

function Card({date,day}) {

  console.log("Card ",day, date); 
  return (
   
    <div className="card">
      <p className="card__date">{date}</p> 
      <img src={day.condition.icon} alt="Avatar" className="card__image"/>
      <div className="container">
        <h4><b>{`${day.maxtemp_c} / ${day.mintemp_c}`}</b></h4>
          <br/>
          <br/>
        <p className="card__text">{day.condition.text}</p> 
  </div>
    </div>
  );
}
export default Card;