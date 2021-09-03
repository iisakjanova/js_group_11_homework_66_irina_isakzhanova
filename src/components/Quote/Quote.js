import React from 'react';
import './Quote.css';

const Quote = ({text, author}) => {
    return (
        <div className="Quote">
            <p>{`" ${text} "`}</p>
            <p>{' - ' + author}</p>
        </div>
    );
};

export default Quote;