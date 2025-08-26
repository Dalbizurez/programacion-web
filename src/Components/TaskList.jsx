import Task_Component from "./Task";
import { useState } from "react";

function TaskList({ tasks }) {
    const [taskList, setTaskList] = useState(tasks);

    const handleDelete = (task) => {
        taskList.splice(taskList.indexOf(task), 1);
        setTaskList([...taskList]);
    };

    return (
        <div className="TaskList">
            {taskList.map(task => {
                return (
                    <div key={task.id} className="task">
                        <Task_Component id={task.id} name={task.name} completed={task.completed} />
                        <button onClick={() => handleDelete(task)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default TaskList;