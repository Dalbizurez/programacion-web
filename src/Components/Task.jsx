import { useState } from "react";


function Task_Component({ task, onComplete }) {
    console.log(task);
    const [isCompleted, setIsCompleted] = useState(task.completed);


    return (
        <div >
            <h2>{task.id} {task.name}</h2>
            <span>Status: </span>
            {isCompleted ?
            <s>
                <label htmlFor={`task-${task.id}`}>Completed </label>
            </s>
            : <label htmlFor={`task-${task.id}`}>Complete </label>
        }
        <input type="checkbox" id={`task-${task.id}`} checked={isCompleted} onChange={() => {
            setIsCompleted(!isCompleted);
            task.completed = !task.completed;
            onComplete();
        }} />
        </div>
    );
}

export default Task_Component;