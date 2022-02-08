import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const inputTextHandler = (e) => {
    setInput(e.target.value);
  }

  const addItemHandler = (e) => {
    e.preventDefault();
    if (input !== '') 
      {setItems([
      ...items, {
        text: input,
        id: Math.random() * 100
      }
      
    ])}
    setInput('');
  }
  
  const newItem = items.map(obj => {return (<li>{obj.text}</li>)});

  return (
    <div className="App">
      <h1>To Do List - Thiago</h1>
      <input onChange={inputTextHandler} value={input} type="text" />
      <button onClick={addItemHandler}>Add todo</button>
      <ul>
        {newItem}
      </ul>
    </div>
  )
}

export default App
