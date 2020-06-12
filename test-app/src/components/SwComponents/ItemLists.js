import React from 'react';
import ItemList from '../ItemList/ItemList';
import { withData } from '../HocHelper/withData';
import withSwapiService from '../HocHelper/withSwapiService';
import withChildFunction from '../HocHelper/withChildFunction';
import compose from '../HocHelper/compose'

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}
const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}


const PersonList = compose(
                      withSwapiService(mapPersonMethodsToProps),
                      withData,
                      withChildFunction(renderName)
                    )(ItemList)

const PlanetList = compose(
                      withSwapiService(mapPlanetMethodsToProps),
                      withData,
                      withChildFunction(renderName)
                    )(ItemList)

const StarshipList =  compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildFunction(renderModelAndName)
                      )(ItemList)

export { PersonList, PlanetList, StarshipList };
