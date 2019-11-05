import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doAddItem, itemsFetchData, doChangeInput} from "../actions/items";
import SavedCity from "./SavedCity";


class CitiesPanel extends Component {
    handleSubmit = event => {
        event.preventDefault();
        this.props.add(this.props.newCityValue);
    };

    handleChange = (event) => {
        this.props.changeInput(event.target.value);
    };

    render() {
        return (
            <div class="container fav">
                <div>
                    <div class="container pl-0">
                        <div class="row">
                            <div class="col-6 px-0 sh">Избранное</div>
                            <div class="col-6 text-right my-auto form-group">
                                <form onSubmit={this.handleSubmit}>
                                    <input class="favourite-input input_advance" value={this.props.newCityValue}
                                           onChange={this.handleChange} required type="text"
                                           placeholder="Добавить новый город"/>
                                    <button type="buton" class="btn-circle">+</button>
                                </form>
                                <div id="errortext" class="text-center error"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.items.map((favCity, i = 0) => {
                                i++;
                                return (
                                    [
                                        <SavedCity key={i} json={favCity}/>,
                                        i % 2 === 0 && <div key={-i} className="w-100"/>,
                                    ]
                                )

                            }
                        )
                    }
                </div>
            </div>
        );

    }


}

const mapStateToProps = (state) => {
    return {
        newCityValue: state.newCityValue,
        items: state.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        add: (city) => dispatch(doAddItem(city)),
        changeInput: (input) => dispatch(doChangeInput(input))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesPanel);
