import React from 'react';
import Post from "./header/pages/Post";
import About from "./header/pages/About";
import ContactUs from "./header/pages/ContactUs";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch"
import Home from "./header/pages/Home";
import Header from "./header/Header";


const AppRouter = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/post" component={Post}/>
                    <Route exact path="/contact-us" component={ContactUs}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default AppRouter;