import { useState } from "react";
import ButtonEdDel from "../../style/ButtonEditDelete";
import Line from "../../style/Line";
import RowInput from "../../style/RowInput";
//imports styles for components
//using element states

export default function ListItem({todo, id, checkComplete,handleEditTodos}) {
//defines the data format
//defines task change
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)
//change selection
  const handleOnEdit = () =>{
    setOnEdit(true)
  }
//storing the new value for the task
  const handleSave = id => {
    setOnEdit(false)
    if (editValue){
      handleEditTodos(editValue,id)
    }else{
      setEditValue(todo.name)
    }
  }
//the condition under which the task is displayed or changed
//depending on the selection
  if(onEdit){
    return (
      <Line>
          <RowInput type="text" id="editValue" value={editValue} name="editValue" 
            onChange={e=> setEditValue(e.target.value.toLowerCase())}
          />
        <ButtonEdDel Edit onClick={()=>handleSave(id)}>Save</ButtonEdDel>
      </Line>
    );
  } else {
    return (
      <Line>
        <label htmlFor={id} className={todo.complete ? "active":""}>
          <RowInput type="checkbox" id={id} checked={todo.complete}
            onChange={()=>checkComplete(id)}
          />
          {todo.name}
        </label>
        <ButtonEdDel Edit disabled={todo.complete}
        onClick={handleOnEdit}>Edit</ButtonEdDel>
      </Line>
    );
  }

  
}
