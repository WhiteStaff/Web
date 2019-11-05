// import React from 'react';
// import {CityCard} from './components/CityCard';
// import renderer from 'react-test-renderer';
// import {SavedCity} from "./components/SavedCity";
// import {shallow} from "../enzyme";
// import {shallowToJson} from "enzyme-to-json";
//
// const json =
//     {
//         data:
//             {
//                 "coord": {"lon": 139, "lat": 35},
//                 "weather": [
//                     {
//                         "id": 800,
//                         "main": "Clear",
//                         "description": "clear sky",
//                         "icon": "01n"
//                     }
//                 ],
//                 "base": "stations",
//                 "main": {
//                     "temp": 289.92,
//                     "pressure": 1009,
//                     "humidity": 92,
//                     "temp_min": 288.71,
//                     "temp_max": 290.93
//                 },
//                 "wind": {
//                     "speed": 0.47,
//                     "deg": 107.538
//                 },
//                 "clouds": {
//                     "all": 2
//                 },
//                 "dt": 1560350192,
//                 "sys": {
//                     "type": 3,
//                     "id": 2019346,
//                     "message": 0.0065,
//                     "country": "JP",
//                     "sunrise": 1560281377,
//                     "sunset": 1560333478
//                 },
//                 "timezone": 32400,
//                 "id": 1851632,
//                 "name": "Shuzenji",
//                 "cod": 200
//             }
//     }
//
// it('CityCard renders correctly', () => {
//
//     const tree = renderer.create(<CityCard json={json.data}/>).toJSON();
//
//     expect(tree).toMatchSnapshot();
// });
//
// it('SavedCity renders correctly', () => {
//     const saved = shallow(<SavedCity key = {1}json={json}/>);
//         saved.SetState({error: true});
//         expect(shallowToJson(saved)).toMatchSnapshot();
//
// });
// /*it('SavedCity renders correctly', () => {
//
//     const tree = renderer.create(<SavedCity key={1} json={json}/>).toJSON();
//
//     expect(tree).toMatchSnapshot();
// });


/*it('renders correctly', () => {

    const tree = renderer.create(<Wrapper />).toJSON();

    expect(tree).toMatchSnapshot();
});*/
