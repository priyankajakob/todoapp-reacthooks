import Todo from './components/Todo'
import './App.css'

const App = ()=>{
    return(
        <div>
            <img src="../download.png" alt="wrong path"/>
            <h1>Todo App</h1>
            {/* strong is possible as bootstrap cdn is added */}
            <h3>Yipee, I used <strong>useContext</strong> and <strong>useReducer</strong> hooks</h3>
            <br/>
            <Todo/>
        </div>
    )
}

export default App