import React from 'react';
import {Route, Switch} from "react-router-dom";

import Header from "../../components/Header/Header";
import Home from "../Home/Home";

import "./Quotes.css";

const Quotes = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/quotes" exact component={Home} />
                <Route path="/quotes/:category" exact component={Home} />
                <Route render={() => <h1>Not found</h1>} />
            </Switch>
        </div>
    );
};

export default Quotes;