import { todo } from "node:test";
//types với interface là như nhau dùng cái nào cũng được
//nên dùng 1 cái cho đến khi nào kiểu của cái đang dùng ko được nữa thì đổi qua cái còn lại
interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  //thêm dấu ? trước : là để nói cho typeScript là thằng nào tao có thể chuyền hoặc không
  owner?: string;
  age?: number;
  isDeveloper?: boolean;
  deleteTodo: (value: number) => void;
}

// type TProps = {
//   todos: {
//     id: number;
//     title: string;
//     isComplete: boolean;
//   }[];
//   owner: string;
//   age: number;
//   isDeveloper: boolean;
// };
//khai bao props bên thằng con
const TodoData = (props: IProps) => {
  const { todos, owner = "không có thông tin", deleteTodo } = props;
  return (
    <div>
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div style={{ padding: "10px 0" }}>
              {item.id}-{item.title} {""}
              <button onClick={() => deleteTodo(item.id)}>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
