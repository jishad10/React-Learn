export const reducer = (state, action) => {
    //eikhane ekta state thakbe arekta action thakbe
    // action.type, action.payload
    //jodi add e click kori taile ki action hobe
    if (action.type === 'ADD') {
        const allBooks = [...state.books, action.payload];
        return {
            ...state, //mani ager ja acce ta thakbe
            books: allBooks,
            isModalOpen: true,
            modalText: 'book is added'
        };
    }
    if (action.type === 'REMOVE') {
        const filteredBooks = [...state.books].filter((book) => book.id !== action.payload); //mani jey golo soman na hoi sei golo ke reke dibo
        return {
            ...state,
            books: filteredBooks,
            isModalOpen: true,
            modalText: 'book is removed'
        };
    }
    return state;
};
