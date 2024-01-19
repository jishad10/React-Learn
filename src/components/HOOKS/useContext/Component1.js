//The useContext hook allows us to access the value of a context within a functional component. By passing the context object to the useContext hook, we can retrieve the current value of the context
//state ta amra globally create korte perechi jate props drilling er jamela chara
//mani com1 ->com2->comp3->comp4 ei babe data pataite hoto ar ekon
//com1 theke comp4 eo sorssori data send/recieve korte parbo

import React, { useState } from 'react';
import Component2 from './Component2';
import { UserContext } from './UserContext';

const Component1 = () => {
    const [user, setUser] = useState({ id: 101, name: 'Anisul Islam' });
    const [text, setText] = useState('hello I am text');
    return (
        <UserContext.Provider value={{ user, text }}>
            <Component2 />
        </UserContext.Provider>
    );
};

export default Component1;

// global state
// component1 -> component2 -> component3 -> component4
