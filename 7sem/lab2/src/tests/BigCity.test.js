import renderer from "react-test-renderer";
import {BigCity} from "../components/BigCity";
import React from "react";
import mock from './responseExample'

const mocks =
    {
        json : mock
    }


it('Bigcity renders correctly', () => {

    const tree = renderer.create(<BigCity json={mocks.json.data}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
