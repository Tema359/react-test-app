import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorButton from '../ErrorButton/ErrorButton';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import PeoplePage from '../PeoplePage/PeoplePage';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({hasError: true});
  }

  render() {
    
    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <button className="toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <ErrorButton />

        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
