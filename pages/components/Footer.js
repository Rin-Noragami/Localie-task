import { useContext, useState } from "react";
import { DataContext } from "./DataProvider";
import Button from "../../style/Button";
import ButtonEdDel from "../../style/ButtonEditDelete";
import Row from "../../style/Row";
import Htwo from "../../style/Htwo";
import Label from "../../style/LableCursor";

export default function Footer() {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkAll;
    });
    setTodos(newTodos);
    setCheckAll(!checkAll);
  };

  const newTodosComplete = () =>{
    return todos.filter((todo) => {
      return todo.complete === false;
    });
  }

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
