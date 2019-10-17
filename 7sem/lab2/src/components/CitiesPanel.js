import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SavedCity} from "./SavedCity";


class CitiesPanel extends Component {
    prevId = Math.round(Math.random()*100);
    handleSubmit = event => {

        if(this.props.posts.length === 2)
            alert("Препод не разрешает больше двух избранных городов")
        else {
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

     delete () {
        // event.preventDefault();
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>Избранное</div>
                        <input ref={input => this.getTitle = input} required type="text" placeholder="Enter city"/>
                        <button>+</button>
                    </div>
                </form>
                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">

                            {this.props.posts.map(post =>
                                (<div>
                                    <button onClick={() =>{this.id = post.id; this.delete(); }}>-</button>
                                    <SavedCity key={post.id} post={post}/>
                                </div>
                            ))}

                        </li>
                    </ul>
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

