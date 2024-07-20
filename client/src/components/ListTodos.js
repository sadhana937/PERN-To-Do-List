import React, { Fragment, useEffect, useState} from "react";
import EditTodos from "./EditTodo";

function ListTodos(){

    const [todos, setTodos] = useState([]);

    const getTodos= async () => {
        try{
            const response = await fetch('http://localhost:5000/todos');
            const jsonData = await response.json();
            setTodos(jsonData);
            //console.log(todos);

        }catch(err){
            console.log(err);
        }
    };
    useEffect(() =>{
        getTodos();
    }, []);

    const deleteTodo = async (id) =>{
        try{
            const response = await fetch(`http://localhost:5000/todos/${id}`,{
                method : "DELETE"}
            );
            // console.log(deleteTodo);
            setTodos(todos.filter(todo => todo.id !== id));
        }
        catch(err){
            console.log(err);
        }

    }
    return(<Fragment>
        <table className="table mt-5 text-center">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        todos.map(todo =>
        (<tr key={todo.id}>
            <td>{todo.description}</td>
           <td><EditTodos todo = {todo}/></td> 
           <td><button className="btn btn-danger" onClick={
            () => deleteTodo(todo.id)
           }>Delete</button></td>
        </tr>
        ))
    }
  </tbody>
</table>
    </Fragment>);
}

export default ListTodos;