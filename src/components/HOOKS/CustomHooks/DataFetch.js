import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';

//const er modde object akare data ,islo.. ni e aschi and usefatch er modde url ta pass ko re dicchi
//baki gola same aager moto

const DataFetch = () => {
    const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

    const loadingMessage = <p>todos is loading</p>;
    const errorMessage = <p>{error}</p>;

    const todosElement =
        data &&
        data.map((todo) => {
            return <p key={todo.id}> {todo.title} </p>;
        });

    return (
        <div>
            <h1>Todos</h1>
            {error && errorMessage}
            {isLoading && loadingMessage}
            {todosElement}
        </div>
    );
};

export default DataFetch;
