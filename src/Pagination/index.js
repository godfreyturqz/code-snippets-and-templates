// How:
// 1 - fetch data using axios
// 2 - limit returned data using slice() method
// 3 - dynamically change the value in slice() method using useState

import { useState, useEffect } from "react";
import axios from "axios"

const Pagination = () => {
    const [posts, setPosts] = useState([])
    const [startPage, setStartPage] = useState(0)

    useEffect(()=> {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res => {
            const limitPost = res.data.slice(startPage , startPage + 3)
            setPosts(limitPost)
        })
        .catch(err => console.log(err))

    }, [startPage])

    // insert these functions to next and prev page buttons
    const prevPage = () => {
        if(startPage === 0 ) return
        setStartPage(prev => prev - 3) 
    }
    const nextPage = () => {
        if(startPage >= 99 ) return
        setStartPage(prev => prev + 3)
    }

    return (
        <>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
            {
                posts.map( item => 
                    <div key={item.id}>
                        <hr/>
                        <p>{item.id}</p>
                        <p>User ID: {item.userId}</p>
                        <p>{item.title}</p>
                        <p>{item.body}</p>
                        <br/>
                    </div>
                )
            }
            
        </>
    )
}

export default Pagination