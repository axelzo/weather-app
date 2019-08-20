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
      tempC: true
    }
  }

  componentDidMount() {
    const url = "https://api.apixu.com/v1/forecast.json?key=548af1ca9ec24d1cb33175649191408&q=Zapopan&days=7";

    fetch(url)
      .then(response => response.json())
      .then(forecasts => {
        this.setState({ data: forecasts });
        console.log(forecasts);
      }
      );
  }

  render() {

    return (
      <div className="app">
        <Navbar className="app__item" />
        <div className="app__container">
          <CardDetail location={this.state.data.location} current={this.state.data.current} forecast={this.state.data.forecast}/>
          <CardGrid className="app__container--column" forecast={this.state.data.forecast} />
        </div>
        <Footer/>
      </div>

    );
  }
}

export default App;
