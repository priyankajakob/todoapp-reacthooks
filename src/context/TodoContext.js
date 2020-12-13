import { createContext } from 'react'

const TodoContext = createContext()

const TodoProvider = (props)=>{
    return(
        <TodoContext.Provider value={props.value}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext , TodoProvider } 