import React from 'react';
import './ErrorComponent.css';

const ErrorComponent = () => {
    if (Math.random() > 0) throw new Error('Well, this happened');

    return (
        <p className="ErrorComponentContent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            doloremque ducimus inventore rem voluptates? Blanditiis cumque dicta
            dignissimos dolorem itaque, iusto nobis nostrum odio quae, quidem ratione,
            rem ut voluptatem.
        </p>
    );
};

export default ErrorComponent;