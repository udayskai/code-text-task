import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import DropdownPage from "./component/homepage/Home";
import Task from "./component/tast/Task";
import User from "./component/User/User";
import Navbar from "./component/homepage/navbar";

function App() {

  //  user restrictions not allowed to go any other routes
  let userData = window.localStorage.getItem("userData");
  if (userData === null) {
    return (
      <div className="mt-5">
        <h1 className="text-center">please login to accsess Page </h1>
        <Route exact path="/" component={User} />
      </div>
    )
  }

  //user allow to navigate  when is Login !! but can't go back to login page
  else {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={DropdownPage} />
          <Route exact path="/Home" component={DropdownPage} />
          <Route exact path="/Task" component={Task} />
          <Route exact path="/User" component={User} />
        </Switch>
      </div>
    );
  }
}



export default App;
