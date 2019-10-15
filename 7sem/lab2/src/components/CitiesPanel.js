import React, {Component} from 'react';
import {connect} from 'react-redux';


 class CitiesPanel extends Component{
     prevId = 0;
    handleSubmit = event => {
        event.preventDefault();
        const title = this.getTitle.value;
        const data = {
            id: (this.prevId += 1),
            title
        };
        console.log(data);
        this.props.dispatch({
            type: "ADD_CITY",
            data
        });
        this.getTitle.value = '';
    };


    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>Избранное</div>
                        <input ref={input => this.getTitle = input} required type="text" placeholder="Enter city"/>
                        <button>+</button>
                    </div>
                </form>
                <div>
                </div>
            </div>
        );

    }


}

export default connect() (CitiesPanel);
