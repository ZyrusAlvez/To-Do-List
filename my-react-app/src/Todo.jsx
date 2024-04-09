import React, {useState} from "react"
export default function Todo(){
    const [todo, setTodo] = useState([])

    function addTask(){
        const newTask = document.getElementById("input").value;
        document.getElementById("input").value = "";
        newTask && setTodo(t => [...t, newTask]);
    }

    function removeTask(index){
        setTodo(t => t.filter((_, i) => i != index))
    }

    function moveUpTask(index){
        if (index !== 0){
            const updatedTask = [...todo];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            setTodo(updatedTask)
    }}
    

    function moveDownTask(index){
        if (index !== todo.length - 1){
            const updatedTask = [...todo];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
            setTodo(updatedTask)
    }}
    

    return (
        <div className="main" onKeyDown={(e) => e.key === "Enter" && addTask()}>
            <h1 className="title">To-Do-List</h1>
            <div>
                <input id="input" placeholder="Enter a Task..." />
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>
            <div style={{marginTop: "20px"}}>
                {todo.map((task, index) => {
                    return <div className="task-holder" key={index}>
                                <label className="task-title">{task}</label>
                                <div className="button-div">
                                    <button className="delete" onClick={() => removeTask(index)} >Delete</button>
                                    <button className="up" onClick={() => moveUpTask(index)} >⬆️</button>
                                    <button className="down" onClick={() => moveDownTask(index)} >⬇️</button>
                                </div>                            
                            </div>
                })}
            </div>
        </div>
    );
}