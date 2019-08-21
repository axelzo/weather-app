import React from 'react';
import Card from '../Card/Card';
import './CardGrid.css';

const CardGrid = ({ forecast, newForecast, toggleTempSelect, tempValue, cardOnClick}) => {

  return (

    <div className="cards-container">
      <button onClick={newForecast} className="btn btn--info">New forecast</button>
      <div className="cards-container__items">
        <select onChange={toggleTempSelect} className="select">
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
                  cardOnClick={cardOnClick}
                  key={index}
                  index={index}
                  date={forecastday.date}
                  day={forecastday.day}
                  text={forecastday.text}
                  temp={tempValue}
                />
              );
            })
            :
            <h1>LOADING...</h1>
        }
      </div>
    </div>
  );
}

export default CardGrid;