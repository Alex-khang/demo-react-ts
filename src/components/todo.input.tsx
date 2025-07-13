import React, { useState } from "react";
interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}
interface IProps {
  name?: string;
  //chuyền function từ cha sang con
  addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: IProps) => {
  const { addNewTodo } = props;

  const [todo, setTodo] = useState<string>("anh khang");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const handleClick = () => {
    if (!todo) {
      alert(`no no no`);
      return;
    }
    addNewTodo({
      id: randomInteger(1, 1000000),
      title: todo,
      isComplete: false,
    });
    setTodo("");
  };
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
      <input
        type="text"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
      <button onClick={handleClick}>Add to do</button>
    </div>
  );
};
export default TodoInput;
