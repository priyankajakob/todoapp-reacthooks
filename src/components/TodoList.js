
//prior to context
// import { Fragment } from 'react'
// const TodoList = ({todos,dispatch})=>{
//     return(
//         <div>
//             <ul>
//                 {
//                     todos.map((todo,index)=>{
//                         return(
//                           <Fragment key={index}>
//                                 <li >{todo.name}</li>
//                                 <button onClick={()=>{
//                                     dispatch({type:"DELETE_TODO",payload:{id:index}})
//                                 }}>
//                                     Delete
//                                 </button>
//                           </Fragment>  
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }


//with Context code----------------------------
import { Fragment, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

import { ArchiveFill, PencilFill } from 'react-bootstrap-icons'
import { deleteTodo } from './helper'

const TodoList = ()=>{
    const { state, dispatch } = useContext(TodoContext)
    const { todos } = state.todos

    // console.log("state inside totolist",todos)

    return(
        <div className="container">
            {/* <ul className="list-group"> */}
                {
                    todos.map((todo)=>{
                        return(
                          <Fragment key={todo.id}>
                                <span className="badge bg-secondary text-large" style={{fontSize:"18px"}}>{todo.name}</span>
                                {/* <li className="list-group-item">{todo.name}</li> */}
                                <button
                                 onClick={()=>{
                                    dispatch({type:"DELETE_TODO",payload:{id:todo.id}})
                                    deleteTodo(todo.id)
                                    dispatch({type:"INCREMENT"})
                                }}>
                                    <ArchiveFill/>
                                </button>
                                {/* <button>
                                    <PencilFill/>
                                </button> Couldn't implement yet */}
                                <br/>
                                <br/>
                          </Fragment>  
                        )
                    })
                }
                {/* </ul> */}
        </div>
    )
}

export default TodoList