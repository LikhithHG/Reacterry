import React, {useState} from 'react';

const App = () => {
  // Edit this component
  const [text, setText] = useState('');

  const countWords = (text) => {
    if(text.length === 0)
      return 0;
    
    //trim() removes leading and trailing whitespaces
    return text.trim().split(/\s+/).length;
  }

  return (
    <>
      <textarea data-testid='textarea-id' value = {text} onChange = { e => setText(e.target.value)}/>
      <h1 data-testid='output-id'>Your article has {countWords(text)} {countWords(text) === 1 ? 'word' : 'words'}</h1>
    </>
  )
}

export default App