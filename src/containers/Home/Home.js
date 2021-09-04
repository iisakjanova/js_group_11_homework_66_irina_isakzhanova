import React from 'react';
import {useHistory} from 'react-router-dom'

import Categories from "../../components/Categories/Categories";
import QuotesList from "../../components/QuotesList/QuotesList";
import withLoader from "../../hoc/withLoader";
import axiosApi from "../../axiosApi";

import './Home.css';

const Home = () => {
    const history = useHistory();

    const handleErrorButtonClick = () => {
        history.push('/errorComponent');
    };

    return (
        <>
            <div className="HomePage Container">
                <Categories />
                <QuotesList />
            </div>
            <button
                className="ErrorBtn"
                onClick={handleErrorButtonClick}
            >
                Generate error
            </button>
        </>
    );
};

export default withLoader(Home, axiosApi);