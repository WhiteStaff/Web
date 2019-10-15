import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.post.title}</h3>
                <hr />
            </div>
        );
    }
}

export default Post;
