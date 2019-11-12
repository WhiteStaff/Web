import {CitiesPanel} from "../components/CitiesPanel";
import {shallow} from "../../enzyme";
import {shallowToJson} from "enzyme-to-json";
import React from "react";

import mock from './responseExample'

it('CitiesPanel отображается корректно', () => {
    var mock = {
        isErrored: true,
        city: "Moscow",
        data: mock
    };

    const FavCity = shallow(
        <CitiesPanel items = {[mock, mock]} newCityValue = "Sochi" />
    );
    expect(shallowToJson(FavCity)).toMatchSnapshot();
});
