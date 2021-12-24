import { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";
//context data to be passed to all components
//imports components

export default function List() {
//uses element state and passed context
  const [todos, setTodos] = useContext(DataContext);
//determines the execution of the task
  const switchComplete = id =>{
    const newTodos = [...todos]
    newTodos.forEach((todo, index)=>{
      if (index===id){
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }
//event for the task change button
  const handleEditTodos = (editvalue, id) =>{
    const newTodos=[...todos]
    newTodos.forEach((todo,index) =>{
      if (index === id){
        todo.name = editvalue
      }
    })
    setTodos(newTodos)
  }

  return (
    <ul>
      {
        todos.map((todo, index) =>(
          <ListItem todo={todo} key={index} id={index}
            checkComplete={switchComplete} handleEditTodos={handleEditTodos}
          />
        ))
      }
    </ul>
  );
}