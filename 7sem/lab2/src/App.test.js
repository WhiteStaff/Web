import React from 'react';
import {CityCard} from './components/CityCard';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const json =
      {
        coord: "0",
        wind: "0",
        humidity: "0",
        pressure: "0",
        clouds: "0",
        name: "",
        temp: "",
        icon: " "
      }
  const tree = renderer.create(<CityCard json={json}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
