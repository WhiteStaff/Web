import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SavedCity} from "./SavedCity";


class CitiesPanel extends Component {
    prevId = Math.round(Math.random() * 100);
    handleSubmit = event => {

        /*if (this.props.posts.length === 2)
            document.getElementById("errortext").innerText = "Нельзя больше 2 городов"
        else */
        if (this.getTitle.value === '') {
            document.getElementById("errortext").innerText = "Заполните это поле!"
        }
        else {
            document.getElementById("errortext").innerText = " "
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
        }
    };

    delete() {
        const data = {
            id: this.id
        };
        console.log(data);
        this.props.dispatch({
            type: "DELETE_CITY",
            data
        });
    };


    id;

    render() {

        return (
            <div class="container fav">
                <div>
                    <div class="container pl-0">
                        <div class="row">
                            <div class="col-6 px-0 sh">Избранное</div>
                            <div class="col-6 text-right my-auto form-group">
                                <form onSubmit={this.handleSubmit}>
                                <input class="favourite-input input_advance" ref={input => this.getTitle = input} required type="text"
                                       placeholder="Добавить новый город"/>
                                <button type="buton" class="btn-circle">+</button>
                                </form>
                                <div id="errortext" class="text-center error"> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {this.props.posts.map(post =>
                        (<div class="col-6">
                                <div class="row mt-2">
                                    <div class="col-6 mb-0 mt-2"><h2 class="mb-0">{post.title}</h2></div>
                                    <div class="col-6 text-right">
                                        <button class="btn-circle" onClick={() => {
                                            this.id = post.id;
                                            this.delete();
                                        }}>X
                                        </button>
                                    </div>
                                </div>
                                <SavedCity key={post.id} post={post}/>
                            </div>
                        ))}
                </div>
            </div>
        );

    }



}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(CitiesPanel);

