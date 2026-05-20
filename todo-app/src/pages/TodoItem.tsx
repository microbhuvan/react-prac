import { useState, useEffect } from "react";
import type { Todo } from "../types/todo";

function TodoItem(){

    const [text, setText] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>(()=>{
        
        const stored = localStorage.getItem("todos");
        return stored ? JSON.parse(stored) : []
    });
    const [choice, setChoice] = useState<string>("");

    let filteredTodos = 
              (choice === "completed")
            ? todos.filter((todo)=>todo.completed) 
            : (choice === "pending") 
            ? todos.filter((todo)=>!todo.completed) 
            : todos;

    let count = todos.length;
    let countIncompleted = todos.filter((todo)=>!todo.completed).length; 
    //here it will take complted if its true !true = false so filter rejects it
    //if the completed is false !false = true so the filter only keeps true values
    // the true values here are all false so the number of false is .length;

    function addTodo(){

        if(!text.trim()) return;

        const newTodo: Todo = {
            id: Date.now(),
            text: text,
            completed: false
        }

        setTodos([...todos, newTodo]);
        setText("");
    }

    function toggleTodo(id: number){

        setTodos(todos.map((todo)=>(
            todo.id === id ? {
                ...todo,
                completed: !todo.completed
            } : todo
        )))
    }

    function removeTodo(id: number){

        setTodos(todos.filter((todo)=>(
            todo.id !== id 
        )))
    }

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos]);

    return(
        <>
            <h1>TODO APP</h1>
            <input 
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />

            <button onClick={addTodo}>add todo</button>
            <div>Total tasks = {count}</div>
            <div>Incomplete tasks = {countIncompleted}</div>

            <button onClick={()=>setChoice("all")}>all</button>
            <button onClick={()=>setChoice("completed")}>completed</button>
            <button onClick={()=>setChoice("pending")}>pending</button>

            
            

            {filteredTodos.map((todo)=>(
                <div key={todo.id}>
                    
                    <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={()=>toggleTodo(todo.id)}
                    />

                    <span style={{textDecoration: todo.completed ? "line-through":"none"}}>{todo.text}</span>

                    <button onClick={()=>removeTodo(todo.id)}>remove</button>
                </div>
            ))}
        </>
    )

}

export default TodoItem;