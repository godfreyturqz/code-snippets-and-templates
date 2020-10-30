import React, {useContext} from 'react'
import { BookContext } from "./Context";

const BookList = () => {
    const [books] = useContext(BookContext)

    return (
        <>
            <p>Total: {books.length}</p>
            {books.map(book => ( <h3 key={book.id}>{book.title}</h3> ))}
            
        </>
    )
}

export default BookList
