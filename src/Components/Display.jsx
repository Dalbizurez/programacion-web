import { useState } from 'react'
import Card from "./Card";

function Display(){
  const [count, setCount] = useState(1);

  const previous = () => {
    setCount(prev => (prev <= 1 ? 1025 : prev - 3));
  }

  const next = () => {
    setCount(prev => (prev >= 1025 ? 1 : prev + 3));
  }


    return (
        <>
        <div className="carousel">
            <button onClick={previous}>Prev</button>

            <Card index={count} />
            <Card index={count+1} />
            <Card index={count+2} />

            <button onClick={next}>Next</button>
        </div>
        </>
    )
}

export default Display;