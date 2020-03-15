import React, { Component } from "react";
import Addtask from './addTask'

export default class Task extends Component {
  constructor() {
    super()
    this.state = {
      taskDataState: null
    }
  }

  // Using life cycle method for api fetch , store response in local storage used slice for set number of data
  async componentDidMount() {
    let taskData = window.localStorage.getItem('taskData');
    // if no data in task array user can still add own inputs
    if (taskData == null) {
      console.log("________________________")
      let taskDataResponse = await fetch("http://jsonplaceholder.typicode.com/todos").then((data) => data.json()).then((item) => item.slice(0, 5))
      let taskDataString = JSON.stringify(taskDataResponse);
      window.localStorage.setItem('taskData', taskDataString);
      window.location.reload()
    }

    let data = JSON.parse(taskData);
    this.setState({ taskDataState: data })
  }




  //Action to remove Data from Present Array and store new data in local storage and reload the page
  onClickDeleteMethod = (id) => {
    let newData = this.state.taskDataState.filter((data) => data.id !== id)
    window.localStorage.removeItem('taskData');
    let taskDataString = JSON.stringify(newData);
    window.localStorage.setItem('taskData', taskDataString);
    window.location.reload();
    // console.log("new array", newData)
  }



  render() {
    //if not data then return form here
    if (this.state.taskDataState === null) {
      return null
    }

    return (
      <div className="container">
        <h1>Task page</h1>

        {/* maping of array  */}
        {this.state.taskDataState.map((item) => (
          <div className="row" key={item.id} style={{ borderBottom: "1px solid black" }}>

            <div className="col-md-10">
              <div className="col-md-3">    {item.id}   </div>
              <div className="col">     {item.title}
                <button className="ml-5">{item.completed.toString()}</button>
                <button className="btn btn-danger  ml-5" style={{ float: "right" }} onClick={() => this.onClickDeleteMethod(item.id)}> Delete </button>
              </div>
            </div>

          </div>
        ))}
        {/* add task handeler */}
        <div className=" mt-5" onClick={() => this.onClickAddMethod()}><Addtask /></div>

      </div>
    );
  }
}
