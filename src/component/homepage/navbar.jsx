import React, { Component } from "react";
import { Link } from "react-router-dom";

// add dropdown
//   <Drowdown />
//           <Infopage />
export default class Navbar extends Component {


  render() {
    let userData = window.localStorage.getItem("userData");
    let data = JSON.parse(userData)
    console.log(data, "navbar")



    return (
      <div className="mb-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link className="navbar-brand" to=""></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/Home">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link active" to="/Task">
                Task
              </Link>
              <Link className="nav-item nav-link active" to="/User">
                User
              </Link>
            </div>
            <h5 className="ml-5" style={{ color: "white" }}>{data.Username}</h5>
          </div>
        </nav>
      </div>
    );
  }
}
