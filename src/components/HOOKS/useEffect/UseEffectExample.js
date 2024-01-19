import React, { useState, useEffect } from 'react';

const useEffectExample = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    //useEffect ekta method eikhane ekta anonymous function thakbe

    useEffect(() => {
        // calls with first render and depened on count
        console.log('useEffect');
    }, [count]);

    //count er bole change hole useeefect ta call hobe
    //[] dara moloto dependency bojacche
    //ei khane just count er ketre call hocce useffect ta karon dependency te isloading ke add kori nai

    return (
        <div>
            {console.log('rednering')}
            <h1>Count: {count} </h1>
            <button
                onClick={() => {
                    setCount((count) => count + 1);
                }}>
                +
            </button>
            <button
                onClick={() => {
                    setIsLoading(!isLoading);
                }}>
                isLoading
            </button>
        </div>
    );
};

export default useEffectExample;
