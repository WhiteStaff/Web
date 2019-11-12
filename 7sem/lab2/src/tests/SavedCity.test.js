import {shallow} from "../../enzyme";
import {SavedCity} from "../components/SavedCity";
import {shallowToJson} from "enzyme-to-json";
import React from "react";

import mock from './responseExample'
import renderer from "react-test-renderer";

const mocks =
    {
        done: true,
        data : mock.data,
        city : "kyiv"
    };
const mocks2 =
    {
        done: false,
        data : mock.data,
        city : "kyiv"
    };
const mocks3 =
    {
        error: true,
        data : mock.data,
        city : "kyiv"
    };

it('SavedCity renders correctly with load', () => {
    const saved = shallow(<SavedCity key = {0} json={mocks2}/>);
    //saved.setState({done: true, error: false});
    expect(shallowToJson(saved)).toMatchSnapshot();

});
it('SavedCity renders correctly with error', () => {
    const saved = shallow(<SavedCity key = {1} json={mocks3}/>);
    //saved.setState({error: true});
    expect(shallowToJson(saved)).toMatchSnapshot();

});
it('SavedCity renders correctly with data', () => {
    const saved = shallow(<SavedCity key = {1} json={mocks}/>);
    expect(shallowToJson(saved)).toMatchSnapshot();
});
