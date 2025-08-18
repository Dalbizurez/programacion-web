import { useState } from 'react'
import Card from "./Card";

function Display(){
  const [count, setCount] = useState(1);

  const previous = () => {
    setCount(prev => (prev <= 1 ? 1025 : prev - 1));
  }

  const next = () => {
    setCount(prev => (prev >= 1025 ? 1 : prev + 1));
  }


    return (
        <>
        <div>
            <button onClick={previous}>Prev</button>

            <Card index={count} />

            <button onClick={next}>Next</button>
        </div>
        </>
    )
}

export default Display;