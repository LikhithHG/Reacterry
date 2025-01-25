import React from 'react';
import { useState } from 'react';

const App = () => {
  // Edit this component
  /*
    Local storage is a web API provided by browsers that allows you to store key-value pairs in a user's browser. Unlike cookies, the data stored in local storage is not sent to the server and remains persistent across page reloads and browser restarts (unless explicitly cleared).

How It Works:
Set a value in local storage: You store data using localStorage.setItem(key, value).
Retrieve a value: You fetch stored data using localStorage.getItem(key).
Update the input field: You populate the input field with the value fetched from local storage.

  */
  const [value, setValue] = useState(localStorage.getItem('inputValue') || '');
  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem('inputValue', e.target.value);
  }
  return (
    <div>
      <input data-testid='input-id' type="text" value = {value} onChange = {handleChange}/>
    </div>
  );
};

export default App;