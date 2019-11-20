import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doAddItem, itemsFetchData, doChangeInput, itemsFetch, doCheckItem} from "../actions/items";
import SavedCity from "./SavedCity";


class CitiesPanel extends Component {
    componentDidMount() {
        this.props.download();
    }

    handleSubmit = event => {
        event.preventDefault();
        //console.log(this.props.check(this.props.newCityValue));
        this.props.add(this.props.newCityValue, this.props.items);

    };

    handleChange = (event) => {
        this.props.changeInput(event.target.value);
    };

    render() {

        let errordiv = "";
        if (this.props.duplicate) {
            errordiv = <div className="alert alert-danger" role="alert">
                Такой город уже добавлен
            </div>
        }

        return (
            <div class="container fav">
                <div>
                    <div class="container pl-0">
                        {errordiv}
                        <div class="row">
                            <div class="col-6 px-0 sh">Избранное</div>
                            <div class="col-6 text-right my-auto form-group">
                                <form onSubmit={this.handleSubmit}>
                                    <input class="favourite-input input_advance" value={this.props.newCityValue}
                                           onChange={this.handleChange} required type="text"
                                           placeholder="Добавить новый город"/>
                                    <button type="buton" class="btn-circle">+</button>
                                </form>
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
                                        <SavedCity key={i} serverInfo={favCity}/>,
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
        duplicate: state.duplicateHandler
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        download: () => dispatch(itemsFetch()),
        fetchData: (url) => dispatch(itemsFetchData(url)),
        add: (city, cities) => dispatch(doAddItem(city, cities)),
        changeInput: (input) => dispatch(doChangeInput(input))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesPanel);
