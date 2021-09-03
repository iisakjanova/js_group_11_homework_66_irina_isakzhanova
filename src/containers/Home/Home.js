import React from 'react';
import Categories from "../../components/Categories/Categories";
import QuotesList from "../../components/QuotesList/QuotesList";

import './Home.css';

const Home = () => {
    return (
        <div className="HomePage Container">
            <Categories />
            <QuotesList />
        </div>
    );
};

export default Home;