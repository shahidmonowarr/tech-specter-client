import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <Spinner className='my-5' animation="border" />;
        </div>
    );
};

export default Loading;