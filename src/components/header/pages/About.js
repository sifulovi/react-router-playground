import React from 'react';

const About = () => {
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
            <h1>I am About</h1>
        </div>
    );
};

export default About;