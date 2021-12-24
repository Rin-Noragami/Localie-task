import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import ButtonEdDel from "../../style/ButtonEditDelete";
import Row from "../../style/Row";
import Htwo from "../../style/Htwo";
import Label from "../../style/LableCursor";
//imports styles for components
//context data to be passed to all components

//will return a string with the "all" option
//the number of tasks
//and the delete button
export default function Footer() {
//uses element state and passed context
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);
//selects all elements of the list
  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };
//number of tasks not completed
  const newTodosComplete = () =>{
    return todos.filter((todo) => {
      return todo.complete === false;
    });
  }
//removes the selected items
  const deleteTodo = () => {
    setTodos(newTodosComplete());
    setCheckAll(false);
  };

  return (
    <>
      {todos.length === 0 ? (
        <Htwo>You have no tasks</Htwo>
      ) : (
        <Row>
          <Label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onChange={handleCheckAll}
              checked={checkAll}
            />
            All
          </Label>
          <p>You have {newTodosComplete().length} task</p>
          <ButtonEdDel id="delete" onClick={deleteTodo}>
            Delete
          </ButtonEdDel>
        </Row>
      )}
    </>
  );
}
