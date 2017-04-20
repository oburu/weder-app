import React from 'react';

// more stateless component and es6 deconstructor :)
const WeatherMessage = ({temp, location, description, image}) => {
  return(
    <div>
      <h1 className="city">{location}</h1>
      {/*<p className="weather-description">{description}</p>
      <span className="weather-img broken-clouds"></span>

      */}
      <h1><img alt="myTime" src={image} /></h1>

      <p className="temperature">{temp}°</p>
      {/*<div className="weather-details">
        <div className="wd keys">
          <p className="pressure">Pressure</p>
          <p className="humidity">Humidity</p>
        </div>
        <div className="wd values">
          <p>1006hpa</p>
          <p>52%</p>
        </div>
      </div>*/}
    </div>
  );
}

export default WeatherMessage;
