import React, { Component } from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetails from '../ItemDetails/ItemDetails';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import SwapiServ from '../../ServicesSw/SwapiServ';
import Row from '../Row/Row';
import ErrorBoundry from '../ErrorBoundry/ErrorBounrdy';

import './PeoplePage.css';


export default class PeoplePage extends Component {
  swapiService = new SwapiServ();

  state = {
    selectedPerson: 1,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople}>
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
