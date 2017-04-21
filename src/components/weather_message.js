import React from 'react';

// more stateless component and es6 deconstructor :)
const WeatherMessage = ({temp, location, description, image, humidity, pressure}) => {
  const IMAGE_URL = require('../css/img/icons/'+image+'.svg');
  return(
    <div>
      <h1 className="city">{location}</h1>
      <p className="weather-description">{description}</p>
      <img alt="myTime" src={IMAGE_URL} />

      <p className="temperature">{Math.round(temp)}°</p>
      <div className="weather-details">
        <div className="wd keys">
          <p className="pressure">Pressure</p>
          <p className="humidity">Humidity</p>
        </div>
        <div className="wd values">
          <p>{pressure} hpa</p>
          <p>{humidity} %</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherMessage;
