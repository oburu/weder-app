import React, { Component } from 'react';
import axios from 'axios';
import SearchPanel from './components/search_panel';
import Burger from './components/burger';
import Main from './components/main';
import './css/styles.css';

const MENU_LAYER_DOWN = 'section menu-layer menu-down';
const MAIN_FADE_IN = 'main-content';
const MAIN_BG = 'section main-layer';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      menuDown: MENU_LAYER_DOWN,
      fadeIn: MAIN_FADE_IN,
      firstTime: true,
      weather:{
        isLoading : false
      }
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.showMenu = this.showMenu.bind(this)
  }

  showMenu(){
    //console.log(this.state.firstTime );
    let menuDown = this.state.menuDown === MENU_LAYER_DOWN && !this.state.firstTime ? 'section menu-layer' : MENU_LAYER_DOWN;
    let fadeIn = this.state.fadeIn === MAIN_FADE_IN ? 'main-content fade-in' : MAIN_FADE_IN;
    this.setState({
      menuDown,
      fadeIn
    });
  }

  handleSearch(location){
    var that = this;
    this.setState({
      weather: {
        isLoading : true,
        errorMessage : undefined,
        temp: undefined,
        image:undefined,
        location: undefined,
        pressure:undefined,
        humidity:undefined,
        description: undefined
      },
      firstTime:false
    })

    const OPEN_WEATHER_MAP_URL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?appid=dc9ac33e49fb812dcc4b4f89e23f2576&units=metric';

    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //here is were the request is made
    axios.get(requestUrl)
    .then((res) => {
      this.showMenu();
      that.setState({
        weather: {
          location: res.data.name,
          temp: res.data.main.temp,
          description:res.data.weather[0].description,
          image:res.data.weather[0].icon,
          pressure:res.data.main.pressure,
          humidity:res.data.main.humidity,
          isLoading: false
        }
      });
    })
    .catch((error) => {
      that.setState({
        weather: {
          isLoading: false,
          errorMessage: error.response.data.message
        }
      });
    });
  }

  render() {
    let val = () => {
      if(this.state.weather.image !== undefined){
        let current = this.state.weather.image.slice(-1);
        if(current === 'd'){
          return MAIN_BG + ' day'
        }else{
          return MAIN_BG + ' night'
        }
      }else {
        return 'fetching data...';
      }
    }
    //console.log(val());
    return (
      <div>
        <Burger showMenu={this.showMenu}/>
        <Main fadeIn={this.state.fadeIn} weather={this.state.weather} currentTime={val()}/>
        <SearchPanel menuDown={this.state.menuDown} onSearch={this.handleSearch}/>
      </div>
    );
  }
}

export default App;
