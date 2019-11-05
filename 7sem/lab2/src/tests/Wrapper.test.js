import renderer from "react-test-renderer";
import {BigCity} from "../components/BigCity";
import React from "react";
import {Wrapper} from "../components/Wrapper";

it('Wrapper renders correctly', () => {

    const tree = renderer.create(<Wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
});
