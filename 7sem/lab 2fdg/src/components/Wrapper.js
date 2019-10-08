import React, {Component} from 'react';

export class Wrapper extends Component{
    componentWillMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
            alert(position.coords.latitude +" " + position.coords.longitude);
        });
    }

    render(){
        return(
            <div>wind</div>
        );
    }
}
