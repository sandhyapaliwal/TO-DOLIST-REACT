import React, { useState, useEffect } from 'react'
import "./App.css"
import TodoInput from './components/Todoinput'
import Todolist from './components/Todolist';

function App() {
  const [listTodo, setListTodo] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(listTodo));
  }, [listTodo]);

  let addList = (inputText) => {
    if (inputText !== '')
      setListTodo([...listTodo, { text: inputText, isEditing: false }]);
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  }

  const editListItem = (key, newText) => {
    let newListTodo = [...listTodo];
    newListTodo[key] = { text: newText, isEditing: false };
    setListTodo([...newListTodo]);
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TO-DO LIST</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist
              key={i}
              index={i}
              item={listItem.text}
              deleteItem={deleteListItem}
              editItem={editListItem}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
