//Prior to using useContext
// import { useState } from 'react'

import { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { v4 } from "uuid"

const TodoAdd = ()=>{
    const [name,setName]=useState("")

    //Prior to using Context-----------------------
    // const handleChange = (e)=>{
    //     const theName = e.target.value
    //     setName(theName)
    // }
    // const handleAdd = ()=>{
    //     if(name)
    //         props.dispatch({type:"ADD_TODOS",payload:{name}})
        
    //     setName("")
    // }

    // return(
    //     <div>
    //         <input type = "text" value={name} onChange={handleChange}/>
    //         <button onClick={handleAdd}>Add Todo</button>
    //     </div>
    // )

    const { state,dispatch } = useContext(TodoContext)
    const {count} = state.count

    const handleAdd = ()=>{
        if(name)
        {
            dispatch({type:"ADD_TODO",payload:{name,id:v4()}}) 
            dispatch({type:"DECREMENT"}) 
            setName("")   
        }
        else {
            return alert("Please enter a name")
        }
    }
    
    return(

        <div>
            { count>0 ? (
                <div>
                    <h4>Only "<strong>{count}</strong>" chances left</h4>
                    <input type = "text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <button onClick={handleAdd}>Add Todo</button>
                </div>
                )
             : (
                 <h4>You have exhausted the count</h4>
             )}
            
        </div>
    )
}

export default TodoAdd