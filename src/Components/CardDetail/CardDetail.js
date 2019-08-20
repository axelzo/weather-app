import React from 'react';

import './CardDetail.css';

function CardDetail({ current, location, forecast }) {



  {
    if (current && location && forecast) {
      return (
        <div className="card-detail">

          <h1 className="card-detail__item card-detail__title--blue">{current.condition.text}</h1>
          <br />
          <p className="card-detail__item card-detail__date">{current.date}</p>
          <img src={current.condition.icon} alt="Avatar" className=" card-detail__item card-detail__image" />
          <div className="card-detail__item card-detail__container">
            <h2><b>{`${current.last_updated.substring(0, 10)}`}</b></h2>
            <h2><b>{`${location.name}, ${location.region}, ${location.country}`}</b></h2>
            <br />
            <br />
            <br />
            <h3>{`${forecast.forecastday["0"].astro.sunrise} Sunrise`}</h3>
            <br />
            <h3>{`${forecast.forecastday["0"].astro.sunset} Sunset`}</h3>
            <br />
            <h3>{`${forecast.forecastday["0"].astro.moonrise} Moonrise`}</h3>
            <br />
            <h3>{`${forecast.forecastday["0"].astro.moonset} Moonset`}</h3>
          </div>
        </div>);
    }
    return <h1>LOADING ...</h1>;
  }

}


export default CardDetail;