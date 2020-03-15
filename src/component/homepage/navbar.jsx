import React from "react";
import { Link } from "react-router-dom";


let Navbar = () => {

  // using local storage data to show UserName Information in navbar
  let userData = window.localStorage.getItem("userData");
  let data = JSON.parse(userData)



  return (
    <div className="mb-4">
      {/* navbar */}
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
          {/* userName */}
          <h5 className="ml-5" style={{ color: "white" }}>{data.Username}</h5>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
