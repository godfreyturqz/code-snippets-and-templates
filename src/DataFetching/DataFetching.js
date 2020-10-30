import React, {useState, useEffect} from 'react'
import Axios from "axios";

const DataFetching = () => {
    const [posts, setPosts] = useState([])
    // const [post, setPost] = useState({})
    // const [id, setId] = useState(1)
    // const [idButton, setIdButton] = useState(1)
    const [selectValue, setSelectValue] = useState(10)
    const [dataLength, setDataLength] = useState(0)
    
    // const handleFetch = ()=>{
    //     setIdButton(id)
    // }

    const handleSelect = (e)=> {
        setSelectValue(e.target.value)
    }

    useEffect(()=> {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        // Axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
        .then(res => {
            console.log(res.data.length)
            setPosts(res.data)
            setDataLength(res.data.length)
            // setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            {/* <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleFetch}>Fetch post</button>
            <div>{post.title}</div> */}
            <div>Show entries</div>
            <select value={selectValue} onChange={handleSelect}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value={dataLength}>All</option>
            </select>
            {/* <ul>
                {posts.map(post => (<li key={post.id}>{post.title}</li>) )}
            </ul> */}
            <ul>
                {posts.slice(0, selectValue).map( post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default DataFetching
