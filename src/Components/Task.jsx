import { useState } from "react";


function Task_Component({ id, name, completed }) {
    const [isCompleted, setIsCompleted] = useState(completed);


    return (
        <div >
            <h2>{id} {name}</h2>
            <span>Status: </span>
            {isCompleted ?
            <s>
                <label htmlFor={`task-${id}`}>Completed </label>
            </s>
            : <label htmlFor={`task-${id}`}>Complete </label>
        }
        <input type="checkbox" id={`task-${id}`} checked={isCompleted} onChange={() => {
            setIsCompleted(!isCompleted);
        }} />
        </div>
    );
}

export default Task_Component;