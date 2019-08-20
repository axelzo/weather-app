import React from 'react';
import Card from '../Card/Card';
import './CardGrid.css';

const CardGrid = ({ forecast }) => {

  console.log("CardGrid FCD ", forecast);
  if (forecast) {
    console.log("CardGrid FCD ", forecast.forecastday);
  }

  return (

    <div className="cards-container">
      <button className="btn btn--info">New forecast</button>
      <div className="cards-container__items">
      
      <select className="select">
        <option value="C">C</option>
         <option value="F">F</option>
      </select>
      </div>
    
      
    <div className="card-grid">
       
      {
        forecast ?
          forecast.forecastday.map((forecastday, index) => {
            return (
              <Card
                key={index}
                date={forecastday.date}
                day={forecastday.day}
                text={forecastday.text}
              />
            );
          })
          :
          <h1>LOADING...</h1>
      }
    </div>
    </div>
  );

  // return (

  //     <div className="card-grid">
  //        <Card/>
  //        <Card/>
  //     </div>
  //   );
}

export default CardGrid;