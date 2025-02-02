import React, {useState} from 'react';

const App = () => {
  // Edit this component
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, currentTodo]);
    setCurrentTodo('');
  }

  return (
    <div>
      <input data-testid="input-id" type = 'text' value = {currentTodo} onChange = {e => setCurrentTodo(e.target.value)}/>
      <button data-testid="button-id" onClick = {addTodo}>Add a todo</button>
      <ul data-testid="ul-id">
        {/* Return todos here */}
        {todos.map(element => <li>{element}</li>)}
      </ul>
    </div>
  )
}

export default App