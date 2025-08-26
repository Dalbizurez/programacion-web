import Task_Component from "./Task";

function TaskList({ tasks }) {

    return (
        <div className="TaskList">
            {tasks.map(task => (
                <Task_Component key={task.id} id={task.id} name={task.name} completed={task.completed} />
            ))}
        </div>
    );
}

export default TaskList;