import { useState } from "react";
import TodoData from "./todo.data";
import TodoInput from "./todo.input";
interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}
const TodoList = () => {
  //đây là component cha
  //   const todos = [
  //     {
  //       id: 1,
  //       title: "Learn React TypeScript",
  //       isComplete: false,
  //     },
  //     {
  //       id: 2,
  //       title: "Subscribe Youtube HoiDanIT",
  //       isComplete: true,
  //     },
  //     {
  //       id: 3,
  //       title: "Learn English",
  //       isComplete: true,
  //     },
  //   ];

  const [listTodo, SetListTodo] = useState<ITodo[]>([]);
  //thêm
  const addNewTodo = (todo: ITodo) => {
    SetListTodo([...listTodo, todo]);
  };
  //xóa
  const deleteTodo = (id: number) => {
    const newlist = listTodo.filter((item) => item.id !== id);
    SetListTodo(newlist);
  };
  return (
    <div
      style={{
        width: "600px",
        margin: "50px auto",
        border: "1px solid #ccc",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <div
        style={{
          padding: "10px 0",
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          borderBottomStyle: "solid",
        }}
      >
        my to do list:
        <hr />
        <br />
        <TodoInput
          addNewTodo={addNewTodo}

          // name="your to do"
        />
        <TodoData
          deleteTodo={deleteTodo}
          todos={listTodo}
          //   owner={"HoangKhang"}
          //   age={22}
          //   isDeveloper={true}
        />
      </div>
    </div>
  );
};
export default TodoList;
