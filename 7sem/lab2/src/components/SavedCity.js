import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

class SavedCity extends Component {
    render() {
        return (
            <div className="card" style={{ marginTop: '20px' }}>
                <div className="card-header">
                    <h3 className="text-center">Все статьи</h3>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {this.props.posts.map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                        <button>-</button>
                    </li>
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
