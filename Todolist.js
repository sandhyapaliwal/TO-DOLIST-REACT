import React, { useState } from 'react'

function Todolist(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.item);

  const handleEdit = () => {
    if (isEditing && editText.trim() !== '') {
      props.editItem(props.index, editText);
    }
    setIsEditing(!isEditing);
  }

  return (
    <li className="list-item">
      {isEditing ? (
        <input
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        props.item
      )}
      <span className='icons'>
        <i
          className={`fa-solid ${isEditing ? 'fa-check' : 'fa-pen'} icon-edit`}
          onClick={handleEdit}
        ></i>
        <i
          className="fa-solid fa-trash-can icon-delete"
          onClick={() => props.deleteItem(props.index)}
        ></i>
      </span>
    </li>
  )
}

export default Todolist
