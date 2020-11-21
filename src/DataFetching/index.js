// How:
// 1 - use axios to fetch data from an API
// 2 - use useEffect to automatically fetch the data when the page loads
// 2a - Alternatively, you can just use a simple function and return the data
// 3 - use useState to store the data in the current state
// 4 - use .slice(starting index, number of slice from starting index) method to limit number of data to fetch
// 5 - to fetch more data, create a function that will increment the current state
// 6 - use .map() method to display on the page
// 7 - add a key prop for every mapped data

import { useState, useEffect } from "react";
import axios from "axios"

const DataFetching = () => {
    const [posts, setPosts] = useState([])
    const [currLimit, setCurrLimit] = useState(3)

    useEffect(()=> {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res => {
            const limitPost = res.data.slice(0 , currLimit).reverse()
            setPosts(limitPost)
        })
        .catch(err => console.log(err))

    }, [currLimit])

    return (
        <>
            <button onClick={() => setCurrLimit(prev => prev + 2)}>Fetch data</button>
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

export default DataFetching