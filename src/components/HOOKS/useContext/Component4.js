import React, { useContext } from 'react';
import { UserContext } from './UserContext';

//basically com4 e useContext ta ke access korte cacchi
//kono props pass korte hobe nah

const Component4 = () => {
    const { user, text } = useContext(UserContext); //usercontext er modde usercontext pass ko re dicchi && user ,text ke destructure ko re nicchi ja te ko re use korte pari

    return (
        <div>
            <h2>{text}</h2>
            <h3>{user.id}</h3>
            <h3>{user.name}</h3>
        </div>
    );
};

export default Component4;
