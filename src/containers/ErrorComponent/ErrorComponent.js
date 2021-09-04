import React from 'react';

const ErrorComponent = () => {
    if (Math.random() > 0) throw new Error('Well, this happened');

    return (
        <p>
            Content
        </p>
    );
};

export default ErrorComponent;