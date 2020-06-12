import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorBounrdy from '../ErrorBoundry/ErrorBounrdy';
import SwapiServ from '../../ServicesSw/SwapiServ';
import DummySwapiService from '../../ServicesSw/DummySwapiServices';
import {SwapiServiceProvider} from '../SwapiServiceContext/SwapiServiceContext';
import StarshipsPage from '../Pages/StarshipsPage'
import PeoplePage from '../Pages/PeoplePage'
import PlanetsPage from '../Pages/PlanetsPage'
export default class App extends Component {

  state = {
    swapiService: new SwapiServ()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiServ ? DummySwapiService : SwapiServ
      return {
        swapiService: new Service()
      }
    })
  }

  render() {
    return (
      <ErrorBounrdy>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBounrdy>
    );
  }
}
