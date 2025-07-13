import { todo } from "node:test";

interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  owner: string;
  age: number;
  isDeveloper: boolean;
}

type TProps = {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  owner: string;
  age: number;
  isDeveloper: boolean;
};
//khai bao props bên thằng con
const TodoData = (props: TProps) => {
  const { todos, owner } = props;
  return (
    <div>
      <div>owner = {owner}</div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
