import React, {useState, useContext} from 'react'
import { BookContext } from "./Context";

const AddBookForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')

    const[books, setBooks] = useContext(BookContext)

    function addTitle(e){
        setTitle(e.target.value)
    }
    function addPrice(e){
        setPrice(e.target.value)
    }
    function addBook(e){
        e.preventDefault()
        if(title.length !== 0 && price.length !== 0){
            setBooks(prev => [...prev, {id: books.length, title: title, price: price}])
            setTitle('')
            setPrice('')
        }
    }

    return (
        <form onSubmit={addBook}>
            <input type="text" name="title" onChange={addTitle} value={title} />
            <input type="text" name="price" onChange={addPrice} value={price} />
            <button>Add to list</button>
        </form>
    )
}

export default AddBookForm
