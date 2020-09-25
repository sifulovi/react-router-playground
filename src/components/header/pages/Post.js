import React from 'react';

const Post = () => {
    const classes = {
        content: {
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
    return (
        <div style={classes.content}>
            <h1>Post will be here...</h1>
        </div>
    );
};

export default Post;