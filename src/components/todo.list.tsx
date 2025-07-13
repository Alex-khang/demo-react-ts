import TodoData from "./todo.data";

const TodoList = ()=>{
    //đây là component cha
    const todos = [
        {
            id: 1,
            title: "Learn React TypeScript",
            isComplete: false
        },
        {
            id: 2,
            title: "Subscribe Youtube HoiDanIT",
            isComplete: true
        },
        {
            id: 3,
            title: "Learn English",
            isComplete: true
        },
    ]
    
    return (
        <div>
            <div>
                my to do list:
                <br/>
                <TodoData
                todos={todos}
                owner={"HoangKhang"}
                age={22}
                isDeveloper={true}
                />
                
            </div>
        </div>
    )
}
export default TodoList;