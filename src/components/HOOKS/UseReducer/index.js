//The useReducer Hook is used to store and update states,
//just like the useState Hook. It accepts a reducer function as its first parameter
//and the initial state as the second.
//useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it.

import React, { useState, useReducer } from 'react';
import { reducer } from './reducer';

//book list
const booksData = [
    { id: 1, name: 'Pather Panchal' },
    { id: 2, name: 'Padma Nadir Majhi' },
    { id: 3, name: '  Srikanta' }
];

const Modal = ({ modalText }) => {
    return <p>{modalText}</p>;
};

const initialState = {
    books: booksData,
    isModalOpen: false, // book is added or.. je text golo patacchi
    modalText: ''
};

const UseReducer = () => {
    const [bookState, dispatch] = useReducer(reducer, initialState); //reducer ekta function && initial state e reke di te pari je initially ki thakbe
    const [bookName, setBookName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: new Date().getTime().toString(), name: bookName }; //id ta unique generate kortechi && name er modde bookname ta ke reke dicchi
        dispatch({ type: 'ADD', payload: newBook }); //dsipatch e type bole di te hobe add naki remove eirokom
        setBookName(''); //then dispatch e payload er maddome bole di te hobe ki/kon golo add korte cacchi
    };

    const removeBook = (id) => {
        dispatch({ type: 'REMOVE', payload: id }); //payload er maddome kono kicu pass ko re di te pari
    };
    return (
        <div>
            <h3>Book List</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={bookName}
                    onChange={(e) => {
                        setBookName(e.target.value);
                    }}
                />
                <button type="submit">Add Book</button>
            </form>
            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />} {/**modelText er modde model ta ke pass ko re dicchi && const model e ey ta ke recive korteche */}
            {/**ekta text dekacchi */}
            {bookState.books.map((book) => {
                const { id, name } = book;
                return (
                    <li key={id}>
                        {name}{' '}
                        <button
                            onClick={() => {
                                removeBook(id);
                            }}>
                            Remove
                        </button>
                    </li>
                );
            })}
        </div>
    );
};

export default UseReducer;
