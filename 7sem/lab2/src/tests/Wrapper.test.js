import {shallow} from "../../enzyme";
import {shallowToJson} from "enzyme-to-json";
import React from "react";


import mock from './responseExample'
import {Wrapper} from "../components/Wrapper";

const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

it('Loading отображается корректно', () => {
    const largeCity = shallow(<Wrapper />);
    expect(shallowToJson(largeCity)).toMatchSnapshot();
});

it('Connection Problems отображается корректно', () => {
    const largeCity = shallow(<Wrapper />);
    largeCity.setState({positionAllowed: true});
    expect(shallowToJson(largeCity)).toMatchSnapshot();
});

it('Loaded отображается корректно', () => {
    const largeCity = shallow(<Wrapper />);
    largeCity.setState({done: true, serverInfo: mock});
    expect(shallowToJson(largeCity)).toMatchSnapshot();
});

it('Loaded with problems отображается корректно', () => {
    const largeCity = shallow(<Wrapper />);
    largeCity.setState({done: true, serverInfo: mock, problems: true});
    expect(shallowToJson(largeCity)).toMatchSnapshot();
});
