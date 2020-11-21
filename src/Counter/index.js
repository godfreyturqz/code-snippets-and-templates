import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const shouldNotLessThanZero = ()=> {
        if(count === 0) return
        setCount(prev => prev - 1)
    }

    return (
        <>
            {count}
            <button onClick={ ()=> setCount(prev => prev + 1) }>Increment</button>
            <button onClick={ shouldNotLessThanZero }>Decrement</button>
        </>
    )
}

export default Counter