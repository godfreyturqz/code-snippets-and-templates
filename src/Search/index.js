import { useState } from "react";
import axios from "axios"

const Search = () => {
    const [posts, setPosts] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/`)
        .then(res => {
            const limitPost = res.data.filter(curr => curr.title.includes(searchValue) || curr.body.includes(searchValue) )
            console.log(limitPost)
            setPosts(limitPost)
            setSearchValue('')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <form onSubmit= {handleSearch}>
                <input type="text" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
                <button>Search</button>
            </form>
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

export default Search