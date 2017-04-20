import React, {Component} from 'react';
import WeatherMessage from './weather_message';

class Main extends Component{
  render(){
    let {isLoading, location, temp, description, image, errorMessage} = this.props.weather;
    let renderMessage = () =>{
      if(isLoading){
        return <h3>Fetching weather... </h3>
      }else if (temp && location){
        return <WeatherMessage location={location} temp={temp} description={description} image={image}/>
      }
    }

    let renderError = () => {
      if(typeof errorMessage === 'string'){
        return <div>{errorMessage}</div>
      }
    }
    return(
      <section className="section main-layer night">
        <div className="container-fluid">
          <div className="row">
            <div className="bg-layer d-flex justify-content-center">
              <div className="maincontent-wrapper">
                <div className={this.props.fadeIn}>
                  {renderMessage()}
                  {renderError()}
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
