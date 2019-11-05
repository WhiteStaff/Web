import mock from "./responseExample";
import App from './App';
import React from "react";
import CitiesPanel from "../components/CitiesPanel";
import {shallow} from "../../enzyme";
import {shallowToJson} from "enzyme-to-json";

const mocks =
    {
        json : mock
    };

it('CitiesPanel renders correctly', () => {
    var input =
        {
            error : true,
            city: "Moscow",
            data: mocks.json
        }
    const panel = shallow(<CitiesPanel items = {[input, input]} newCityValue = "Sochi"/>);

    expect(shallowToJson(panel)).toMatchSnapshot();
});
