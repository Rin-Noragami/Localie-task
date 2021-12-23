import { useState } from "react";
import ButtonEdDel from "../../style/ButtonEditDelete";
import Line from "../../style/Line";
import RowInput from "../../style/RowInput";

export default function ListItem({todo, id, checkComplete,handleEditTodos}) {
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)

  const handleOnEdit = () =>{
    setOnEdit(true)
  }

  const handleSave = id => {
    setOnEdit(false)
    if (editValue){
      handleEditTodos(editValue,id)
    }else{
      setEditValue(todo.name)
    }
  }

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
