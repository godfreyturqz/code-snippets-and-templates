import React, {useState} from 'react'
import Habit from "./images/Habit.png";
import Jekyll from "./images/Jekyll.png";
import Moterra from "./images/Moterra.png";
import Scalpel from "./images/Scalpel.png";
import SuperSlice from "./images/SuperSlice.png";
import Synapse from "./images/Synapse.png";

function ImageSlider() {
    const [number, setNumber] = useState(0)

    const inlineStyle = {
        width: "50%"
    }

    const images = [
        Habit,
        Jekyll,
        Moterra,
        Scalpel,
        SuperSlice,
        Synapse
    ]

    const decrement = () =>{
        if(number === 0) return setNumber(images.length - 1)
        setNumber(number - 1)
    }
    const increment = () =>{
        if( number === images.length - 1 ) return setNumber(0)
        setNumber(number + 1)
    }

    return (
        <div>
            <div>
                <button onClick={decrement}>left</button>
                <button onClick={increment}>right</button>
            </div>
            <img src={images[number]} alt="bike" style={inlineStyle}/>
            <h1>Photo no. {number + 1 }</h1>
        </div>
    )
}

export default ImageSlider
