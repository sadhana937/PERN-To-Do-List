import React, {Fragment, useState} from "react";

function EditTodos({todo}){
    const [description, setDescription] = useState(todo.description);

    const updateDescription = async(e) =>{
        e.preventDefault();
        try{
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.id}`,{
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)

            })
        window.location = '/';

       }catch(err){
        console.log(err.response.data);
       }
    };
    return(
        <Fragment>
            <button type="button" 
            class="btn btn-primary"
             data-toggle="modal" 
            data-target={`#id${todo.id}`}>
  Edit
</button>

<div class="modal" id={`id${todo.id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit your Task</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={
            () => setDescription(todo.description)
        }>&times;</button>
      </div>

      <div class="modal-body">
        <input type="text" className="form-control" value={description} 
        onChange={(e) => {
            setDescription(e.target.value);
        }}/>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal"
        onClick={ e => updateDescription(e)}>Done</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    )
}

export default EditTodos;
