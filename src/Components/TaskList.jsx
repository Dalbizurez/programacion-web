import Task_Component from "./Task";
import { useState } from "react";

function TaskList({ tasks }) {
    const [taskList, setTaskList] = useState(tasks);
    const [filter, setFilter] = useState("all");

    const handleDelete = (task) => {
        tasks.splice(tasks.indexOf(task), 1);
        setTaskList([...tasks]);
    }

    return (
        <div className="TaskList">
            <button onClick={() => filterTasks(true)}>Completed</button>
            <button onClick={() => filterTasks(false)}>Pending</button>
            <button onClick={() => {setTaskList(tasks); setFilter("all")}}>All</button>
            {taskList.map(task => {
                return (
                    <div key={task.id} className="task">
                        <Task_Component task={task} />
                        <button onClick={() => handleDelete(task)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default TaskList;