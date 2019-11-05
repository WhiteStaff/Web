import {shallow} from "../../enzyme";
import {SavedCity} from "../components/SavedCity";
import {shallowToJson} from "enzyme-to-json";
import React from "react";

import mock from './responseExample'
import renderer from "react-test-renderer";

const mocks =
    {
        json : mock
    }

it('SavedCity renders correctly with load', () => {
    const saved = shallow(<SavedCity key = {0} json={mocks.json}/>);
    saved.setState({done: true, error: false});
    expect(shallowToJson(saved)).toMatchSnapshot();

});
/*it('SavedCity renders correctly with error', () => {
    const saved = shallow(<SavedCity key = {1} json={mocks.json}/>);
    saved.setState({error: true});
    expect(shallowToJson(saved)).toMatchSnapshot();

});
it('SavedCity renders correctly with data', () => {
    const tree = renderer.create(<SavedCity key = {1} json={mocks.json}/>).toJSON();
    expect(tree).toMatchSnapshot();
});*/
