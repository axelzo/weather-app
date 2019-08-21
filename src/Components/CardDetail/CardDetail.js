import React from 'react';

import './CardDetail.css';

function CardDetail({ current, location, forecast, cardSelected}) {
    if (current && location && forecast) {
      return (
        <div className="card-detail">
          <h1 className="card-detail__item card-detail__title--blue">{forecast.forecastday[cardSelected].day.condition.text}</h1>
          <br />
          <p className="card-detail__item card-detail__date">{current.date}</p>
          <img src={forecast.forecastday["0"].day.condition.icon} alt="Avatar" className=" card-detail__item card-detail__image" />
          <div className="card-detail__item card-detail__container">
            <h2><b>{`${current.last_updated}`}</b></h2>
            <h2><b>{`${location.name}, ${location.region}, ${location.country}`}</b></h2>
            <br />
            <br />
            <br />
            <h3>{`${forecast.forecastday[cardSelected].astro.sunrise} Sunrise`}</h3>
            <br />
            <h3>{`${forecast.forecastday[cardSelected].astro.sunset} Sunset`}</h3>
            <br />
            <h3>{`${forecast.forecastday[cardSelected].astro.moonrise} Moonrise`}</h3>
            <br />
            <h3>{`${forecast.forecastday[cardSelected].astro.moonset} Moonset`}</h3>
          </div>
        </div>
      );
    }
    return <h1 className="card-detail__item"></h1>;
}
export default CardDetail;