import React, { Component } from 'react';
import './ItemList.css';
import SwapiServ from '../../ServicesSw/SwapiServ';
import Spinner from '../Spinner/Spinner';

export default class ItemList extends Component {
  swapiService = new SwapiServ();
  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList });
    });
  }

  rendererItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.rendererItems(peopleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
