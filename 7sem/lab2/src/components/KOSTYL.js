import React, {Component} from 'react';

export class KOSTYL extends Component {
    componentWillUpdate(nextProps, nextState, nextContext) {
        if(this.props.id){
            this.delete(this.props.id)
        }
    }

    delete(id) {
        // event.preventDefault();
        const data = {
            id: id
        };
        console.log(data);
        this.props.dispatch({
            type: "DELETE_CITY",
            data
        });
    }

}
