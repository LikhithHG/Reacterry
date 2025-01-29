import {useState} from 'react';

const App = () => {
  // Edit this component
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 data-testid="count">{count}</h1>
      <button data-testid="increment" onClick = {() => setCount(count + 1)}>Increment</button>
      <button data-testid="decrement" onClick = {() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default App