import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorBounrdy from '../ErrorBoundry/ErrorBounrdy';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import SwapiServ from '../../ServicesSw/SwapiServ';
import DummySwapiService from '../../ServicesSw/DummySwapiServices';
import {PersonList, PlanetList, StarshipList} from '../SwComponents/ItemLists';
import { PersonDetails, PlanetDetails, StarshipDetails } from '../SwComponents/Details';
import {SwapiServiceProvider} from '../SwapiServiceContext/SwapiServiceContext'
export default class App extends Component {
  swapiService = new DummySwapiService();

  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const { getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople, getAllPlanets } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>


        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />

      </ItemDetails>
    );

    return (
      <ErrorBounrdy>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />

            <PersonList />

            <PlanetList />

            <StarshipList />

          </div>
        </SwapiServiceProvider>
      </ErrorBounrdy>
    );
  }
}
