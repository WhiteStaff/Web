import React, { Component } from 'react';

import { connect } from 'react-redux';

class SavedCity extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h3 className="text-center">Все статьи</h3>
                </div>
                <ul >
                    <li>{console.log(this.props.posts)}</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(SavedCity);
