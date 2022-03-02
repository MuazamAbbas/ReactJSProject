import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import App from "./Components/App";
// import DClock from './DClock';
// import Events from './Components/Events';
// import Form from './Components/Form';
// import Incredecre from "./Components/Incredecre";
// import ToDoList from "./Components/ToDoList";
import WebPage from "./Components/WebPage";

ReactDOM.render(
  <div>
    <WebPage />

    {/*<ToDoList />*/}
    {/*<Incredecre />*/}
    {/*<App /> */}
    {/* <DClock /> */}
    {/* <Events /> */}
    {/* <Form /> */}
  </div>,

  document.getElementById("root")
);
