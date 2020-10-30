import React, {useState, createContext} from 'react'

export const BookContext = createContext()

export const BookProvider = (props) => {
    const [books, setBooks] = useState([
        {
            id: '34242',
            title: '33 Strategies of War',
            price: '$10'
        },
        {
            id: '656518',
            title: 'Laws of Human Nature',
            price: '$15'
        },
        {
            id: '34485',
            title: 'Mastery',
            price: '$18'
        }
    ])

    return (
        <BookContext.Provider value={[books, setBooks]}>
            {props.children}
        </BookContext.Provider>
    )
}
