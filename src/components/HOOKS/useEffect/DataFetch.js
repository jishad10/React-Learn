import React, { useState, useEffect } from 'react';

//load niwar somoy ekta msg dekabo ei ta datafetch er ongso nai tai baire rakleo prblm nai
const loadingMessage = <p>todos is loading</p>;

const DataFetch = () => {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    //data fetch korar jonno use hoi
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            //jodi res ok hoi taile res ta ka json format e convert korbe ,na hole error dekabe
            .then((res) => {
                if (!res.ok) {
                    throw Error('fecthing is not successful');
                } else {
                    return res.json();
                }
            })
            //data ta ka fake api theke ni e ese setTodos er modde set ko re dicchi
            .then((data) => {
                setTodos(data);
                setIsLoading(false); //loading false mani loading sesh howar por data golo dekabe
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    //todos er modde mapping ko re ko re todo golo ni aste pari ...todo golo basically fake api theke asteche
    //todos && diwar mani hocce todo er modde value thakle/true hole dekabe naile dekabe nah
    const todosElement =
        todos &&
        todos.map((todo) => {
            return <p key={todo.id}> {todo.title} </p>;
        });

    return (
        <div>
            <h1>Todos</h1>
            {error && <p> {error} </p>} {/*jodi error pai ta para akare dekabe */}
            {isLoading && loadingMessage}
            {todosElement}
        </div>
    );
};

export default DataFetch;
