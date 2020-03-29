import React, { useState, useEffect } from 'react';
import { postedService } from '../../services/posted.service';
// import { } from '../../services/utils.service';

export const Home = () => {
    const [count, setCount] = useState(0);
    const [posted, setPosted] = useState([]);

    useEffect(() => {
        postedService.getAllPosted().then(data => {
            setPosted(data);
        });
    });

    const callMethodsExam = () => {};

    return (
        <div>
            <p>HOME</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => callMethodsExam()}>Result</button>
        </div>
    );
};
