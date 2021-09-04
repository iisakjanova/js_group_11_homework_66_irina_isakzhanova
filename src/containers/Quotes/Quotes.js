import React from 'react';
import {Route, Switch} from "react-router-dom";

import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

import "./Quotes.css";

const Quotes = () => {
    return (
        <ErrorBoundary>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/quotes" exact component={Home} />
                <Route path="/quotes/:category" exact component={Home} />
                <Route path="/errorComponent" component={ErrorComponent} />
                <Route render={() => <h1>Not found</h1>} />
            </Switch>
        </ErrorBoundary>
    );
};

export default Quotes;