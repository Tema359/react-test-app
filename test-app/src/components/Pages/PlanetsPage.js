import React, { Component } from 'react'
import {PlanetList} from '../SwComponents/ItemLists'
import PlanetDetails from '../SwComponents/PlanetDetails'
import Row from '../Row/Row'

export default class PlanetsPage extends Component {
  
  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem})
  }

  render() {
    const { selectedItem } = this.state
    return (
      <Row 
      left={<PlanetList onItemSelected={this.onItemSelected} />}
      right={<PlanetDetails itemId={selectedItem} />}
      />
    )
  }
}