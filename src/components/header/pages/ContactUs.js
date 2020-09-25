import React from 'react';

const ContactUs = () => {
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
            <h1>I am Contact</h1>
        </div>
    );
};

export default ContactUs;