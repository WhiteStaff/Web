import renderer from "react-test-renderer";
import {CityCard} from "../components/CityCard";
import React from "react";
import mock from './responseExample'

const mocks =
    {
        json : mock
    };

it('CityCard renders correctly', () => {
    const tree = renderer.create(<CityCard json={mocks.json.data}/>).toJSON();

    expect(tree).toMatchSnapshot();
});
