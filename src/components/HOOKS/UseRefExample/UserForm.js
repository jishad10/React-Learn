import React, { useRef } from 'react';

//useref hooks er sahajje amra dom ka manipulate korte pari && caile kicu changle o ante pari

const UserForm = () => {
    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userName = userNameRef.current.value; //useref er maddome value ta ko je ni e reke dicchi
        const password = passwordRef.current.value;
        userNameRef.current.style.color = 'red';
        console.log({ userName, password });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">UserName: </label>
                <input type="text" id="userName" ref={userNameRef} /> {/**useref hook ta link ko re di te hobe access korar jonno */}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" ref={passwordRef} />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default UserForm;
