
export const fetchTodos = ()=>{
    
    let todos = []
    if(typeof window !== "undefined")
    {
        if(localStorage.getItem("todos"))
        todos = JSON.parse(localStorage.getItem("todos"))
    }
 
    return todos
}

export const saveTodos = (todo)=>{
    let todos = []
    if(typeof window !== undefined)
    {
        if(localStorage.getItem("todos"))
        todos = JSON.parse(localStorage.getItem("todos"))

        todos.push(todo)
        localStorage.setItem("todos",JSON.stringify(todos))
    }
}

export const deleteTodo = (id)=>{
    let todos = []
    if(typeof window !== undefined)
    {
        if(localStorage.getItem("todos"))
        todos = JSON.parse(localStorage.getItem("todos"))

        todos = todos.filter((todo)=>todo.id!==id)
        localStorage.setItem("todos",JSON.stringify(todos))
    }
}