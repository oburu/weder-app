import React, {Component} from 'react';

class Main extends Component{
  render(){
    return(
      <section className="section main-layer night">
        <div className="container-fluid">
          <div className="row">
            <div className="bg-layer d-flex justify-content-center">
              <div className="maincontent-wrapper">
                <div className="main-content fade-in">
                  <h1 className="city">Manchester</h1>
                  <p className="weather-description">Broken clouds</p>
                  <span className="weather-img broken-clouds"></span>
                  <p className="temperature">20°</p>
                  <div className="weather-details">
                    <div className="wd keys">
                      <p className="pressure">Pressure</p>
                      <p className="humidity">Humidity</p>
                    </div>
                    <div className="wd values">
                      <p>1006hpa</p>
                      <p>52%</p>
                    </div>
                  </div>
                </div>
                <div className="footer">
                  <p>Made with love and sweat by <a href="#" target="_blank">Rebus.io</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
