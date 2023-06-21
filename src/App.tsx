import React from 'react';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import { ITodo } from './types/data';
import { TodoList } from './components/TodoList';

const App: React.FC = () => {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }

  const addTodo = () => {
    if(value) {
      let flag = false;
      todos.forEach(elem => {
        if(elem.title === value) flag = true;
      })
      if(!flag) setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false
      }])
    }
  }
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === 'Enter') addTodo();
  }

  const deleteTodo = (id: number): void => {
    let newArray = todos.filter(elem => elem.id !== id);
    setTodos(newArray);
  }

  const toggleTodo = (id: number): void => {
    let newArray = todos.map(elem => {
      if(elem.id === id) {
        return {
          ...elem, complete: !elem.complete
        }
      }
      else {
        return elem;
      }
    })
    setTodos(newArray)
  }

  return (
    <div>
      <div>
        <input type='text' value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} status={false} items={todos}/>
    </div>
  )
}


export {App};