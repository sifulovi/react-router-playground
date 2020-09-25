import React from 'react';
import classes from './home.module.css'

const Home = () => {

    return (
        <div className={classes.content}>
            <section className={classes.bio}>
                <h2 className={classes.heading2}>The Owl </h2>
                <h2 className={classes.heading2}>In Modern Town</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda consequuntur enim eveniet
                    maiores, rem vero voluptatem. Adipisci consequatur dolores ducimus eum, odio optio quia quod.
                    Accusantium laudantium quas vero?
                </p>
            </section>

            <section className={classes.images}>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/4f/b0/36/the-owl.jpg" alt="owl"/>

            </section>
        </div>
    );
};

export default Home;