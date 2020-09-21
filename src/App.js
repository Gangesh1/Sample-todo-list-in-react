import React, { useState } from 'react';
import { Button ,FormControl ,Input,InputLabel,List,ListItem, } from '@material-ui/core';


import './App.css';

function App() {

  const [todos, setTodos]= useState(['']);
  const [input, setInput]= useState('');
 
  

  const addTodo= (event=>{
  event.preventDefault();
    setTodos([...todos,input]);
    setInput('')
  
  })


  return (
    <div className="App">
      <form>
    <h1 >Todo List</h1>

  
    <FormControl>
  <InputLabel >Write to add</InputLabel>
  <Input value={input} onChange={(event) => {setInput(event.target.value)}} />
  
</FormControl>
    <Button  disabled={!input}type="submit" onClick={addTodo} variant="contained" color="primary">
    Add TODO
</Button>


    <ul>
        {todos.map(todo=>(
          <List>
            <ListItem>
                <li>{todo} </li>
            </ListItem>
            
          </List>
         
        ))
        }

    </ul>
    </form>
    </div>
  );
}

export default App;
