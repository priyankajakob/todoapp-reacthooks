import {useReducer,useState,useEffect} from 'react'

import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import { TodoProvider } from '../context/TodoContext'

import combineReducers from 'react-combine-reducers'
import { fetchTodos } from './helper'

const Todo = ()=>{
    const [todosList,setTodosList] = useState([])

    useEffect(()=>{
        setTodosList(fetchTodos())
        
    },[])

    const initialTodos={todos:todosList}
    console.log(initialTodos)
    const todosReducer = (state,action)=>{
        switch(action.type)
        {
            case "ADD_TODO":{
                // setTodosList(...state.todos)
                return {todos : [...state.todos,action.payload]}
            }
            case "DELETE_TODO":{
                // console.log(action)
                return {todos:state.todos.filter((todo)=>todo.id!==action.payload.id)}
            }
            case "EDIT_TODO":{
                return {todos:[...state.todos,action.payload]}
            }
            default:{
                return {todos : [...state.todos]}
            }
        }
    }


    //when we are okay to pass dispatch to childs -- before use of context
    
    // const initialState={todos:[]}
    // const reducer = (state,action)=>{
    //     switch(action.type)
    //     {
    //         case "ADD_TODOS":{
    //             return {todos : [...state.todos,action.payload]}
    //         }
    //         case "DELETE_TODO":{
    //             // console.log(action)
    //             return {todos:state.todos.filter((todo,id)=>id!==action.payload.id)}
    //         }
    //         default:{
    //             return {todos : [...state.todos]}
    //         }
    //     }
    // }
    // const [state,dispatch] = useReducer(reducer,initialState)

    // return(
    //     <div>
    //         <TodoList todos = {state.todos} dispatch={dispatch}/>
    //         <br/>
    //         <TodoAdd dispatch = {dispatch}/>
    //     </div>
    // )
    //  const [state,dispatch] = useReducer(reducer,initialState)


    const initialCount = {count:5}
    const countReducer = (state,action)=>{
        switch(action.type)
        {
            case "INCREMENT":{
                return {count:state.count+1}
            }
            case "DECREMENT":{
                return {count:state.count-1}
            }
            default:return {count:state.count}
        }
    }

    const [combinedReducers,initialState] = combineReducers({
        todos : [todosReducer,initialTodos],
        count : [countReducer,initialCount]
    })

    const [state,dispatch] = useReducer(combinedReducers,initialState)
    // console.log(state) ---- output below
    //     {todos: {…}, count: {…}}
    // count: {count: 0}
    // todos: {todos: Array(0),editMode:false}
    // __proto__: Object
    return(
        <TodoProvider value = {{state,dispatch}}>
              <div>
                  <TodoList/>
                  <br/>
                  <TodoAdd/>    
              </div>
        </TodoProvider>
    )
}

export default Todo