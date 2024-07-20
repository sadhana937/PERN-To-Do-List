import { Fragment, useState } from "react";
import React from "react";


function Inputtodo(){
    const [description, setDescription] = useState();

    const onSubmitForm = async (e) => {
    e.preventDefault();
    try{
        const body = {description};
        const response = await fetch("http://localhost:5000/todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body),
            });
        // console.log(response);
        window.location = '/';
        } catch(err){
            console.log(err.message);
        }
    } 

    return(<Fragment>
        <h1 className = "text-center mt-5 mb-5">To Do List</h1> 
        <form className="d-flex mt-10" onSubmit={onSubmitForm}>
        <input className="form-control" type="text" value = {description} onChange={e => {
            setDescription(e.target.value);
        }}/>
            <button className = "btn btn-success" >Add</button>
        </form>
    </Fragment>);
}

export default Inputtodo;