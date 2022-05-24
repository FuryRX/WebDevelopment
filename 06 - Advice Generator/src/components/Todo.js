import {useState} from "react"


function Todo (){
    const [todos,setTodos] = useState([]);
    const [task,setTask] = useState(""); 

    return (
        <div>
        <h1 className="text-center uppercase text-8xl font-bold text-green-800">Todo List</h1>
        <div className='flex justify-center items-center mt-8'>
            
            
            <form className='flex space-x-4'>
                <input value={task} onChange={(e) => {
                    setTask(e.target.value)
                    
                }} type="text" className="flex-1 border"/>
                <button onClick={ (e) => {
                    e.preventDefault()
                    setTodos(todos.concat(task))
                    setTask("")
                    
                    }} type="submit" className='px-4 py-2 bg-green-600 text-center text-white uppercase'>Submit</button>
            </form>

            
        </div>
        {todos.map(todo => {
            return (
             <div className='flex justify-center items-center'><h1 className="text-4xl font-bold">{todo}</h1></div>   
            )
        })}
        </div>
    )
};

export default Todo;