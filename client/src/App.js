import React, {Fragment} from "react";
import './App.css';
import Inputtodo from "./components/Inputtodo";
import ListTodos from "./components/ListTodos";


function App() {
  return (<Fragment> 
    <div className="container">
    <Inputtodo />
    <ListTodos />
    </div>
  </Fragment>
   
  );
}

export default App;
