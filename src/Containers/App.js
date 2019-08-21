import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import CardDetail from '../Components/CardDetail/CardDetail'
import CardGrid from '../Components/CardGrid/CardGrid'
import Footer from '../Components/Footer/Footer'
//import { robots } from './robots';
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      data: {},
      temp: "C",
      cardSelected: 0,
    }
    this.handleCardOnClick = this.handleCardOnClick.bind(this);
  }


  componentDidMount() {
    this.handleFetchData();
  }

  handleFetchData = () =>{
    const url = "https://api.apixu.com/v1/forecast.json?key=548af1ca9ec24d1cb33175649191408&q=Zapopan&days=7";
    fetch(url)
      .then(response => response.json())
      .then(forecasts => {
        this.setState({ data: forecasts });
      });
  }

  handleNewForecastClick = (e) =>{
    e.preventDefault();
    this.handleFetchData();
    console.log('New Forecast.', this.state.data);
  }

  handleToggleTempSelect = (e) =>{
    e.preventDefault();
    this.setState({temp:e.target.value});
  }

  handleCardOnClick = (index) =>{
    this.setState({cardSelected:index});
  }

  render() {
    return (
      <div className="app">
        <Navbar className="app__item" />
        <div className="app__container">
          <CardDetail cardSelected={this.state.cardSelected} location={this.state.data.location} current={this.state.data.current} forecast={this.state.data.forecast}  className="app__item--40"/>
          <CardGrid cardOnClick={this.handleCardOnClick} tempValue={this.state.temp} toggleTempSelect={this.handleToggleTempSelect}  forecast={this.state.data.forecast} newForecast={this.handleNewForecastClick} className="app__container--column"/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
