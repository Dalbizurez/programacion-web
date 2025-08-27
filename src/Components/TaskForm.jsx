import { useState } from "react";

function TaskForm({ onAdd }) {
    const [name, setName] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!name.trim()) return;
        onAdd(name); 
        setName("");}

    return( <div>
        <form className="TaskForm" onSubmit={handleSubmit}>
            <input type="text" id="taskName" placeholder="Task name" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">+</button>
        </form>
    </div>);
}

export default TaskForm;
