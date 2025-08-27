import Task_Component from "./Task";
import { useState } from "react";

function TaskList({ tasks, setTaskList }) {
    const [filter, setFilter] = useState("all");

    const handleDelete = (task) => {
        tasks.splice(tasks.indexOf(task), 1);
        render();
    };

    const render = () => {
        if (filter === "completed") {
            setTaskList(tasks.filter(t => t.completed));
            return;
        } else if (filter === "pending") {
            setTaskList(tasks.filter(t => !t.completed));
            return;
        }

        setTaskList([...tasks]);
    }

    const filterTasks = (completed) => {
        setFilter(completed ? "completed" : "pending");
        setTaskList(tasks.filter(t => t.completed == completed));
    }

    return (
        <div className="TaskList">
            <button onClick={() => filterTasks(true)}>Completed</button>
            <button onClick={() => filterTasks(false)}>Pending</button>
            <button onClick={() => {setTaskList(tasks); setFilter("all")}}>All</button>
            {tasks.map(task => {
                return (
                    <div key={task.id} className="Task">
                        <Task_Component task={task} onComplete = {render} />
                        <button onClick={() => handleDelete(task)}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default TaskList;