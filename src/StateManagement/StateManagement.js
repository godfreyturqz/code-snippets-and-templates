import React from 'react'
import { BookProvider } from "./Context";
import BookList from './BookList';
import AddBookForm from './AddBookForm';

const StateManagement = () => {
    return (
        <BookProvider>
            <AddBookForm />
            <BookList />
        </BookProvider>
    )
}

export default StateManagement
