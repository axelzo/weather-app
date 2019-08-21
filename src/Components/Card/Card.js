import React from 'react';
import './Card.css'

function Card({date,day, temp,cardOnClick,index}) {
 
    if(temp === "C"){
      return (
        <button className="card" onClick={()=>cardOnClick(index)}>
          <p className="card__date">{date}</p> 
          <img src={day.condition.icon} alt="Avatar" className="card__image"/>
          <div className="container">
            <h4><b>{`${day.maxtemp_c} / ${day.mintemp_c}`}</b></h4>
            <br/>
            <p className="card__text">{day.condition.text}</p> 
          </div>
        </button>
      );

    }else {
      return (
        <button className="card">
          <p className="card__date">{date}</p> 
          <img src={day.condition.icon} alt="Avatar" className="card__image"/>
          <div className="container">
            <h4><b>{`${day.maxtemp_f} / ${day.mintemp_f}`}</b></h4>
            <br/>
            <p className="card__text">{day.condition.text}</p> 
          </div>
        </button>
      );
    }
      
  }

export default Card;