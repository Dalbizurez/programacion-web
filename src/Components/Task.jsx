import { useState } from "react";


function Task_Component({ id, name, completed }) {
    const [isCompleted, setIsCompleted] = useState(completed);


    return (
        <div className="task" >
            <h2>{id} {name}</h2>
            <p>Status: </p>

            <input type="checkbox" id={`task-${id}`} checked={isCompleted} onChange={() => {
                setIsCompleted(!isCompleted);
            }} />
            {isCompleted ?
            <s>
                <label htmlFor={`task-${id}`}>Completar</label>
            </s>
            : <label htmlFor={`task-${id}`}>Completar</label>
            }
        </div>
    );
}

export default Task_Component;