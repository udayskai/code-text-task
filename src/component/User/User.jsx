import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import SimpleReactValidator from 'simple-react-validator'


export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    // console.log("user props", props)
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }


  //input on change handler
  OnChangeMethod = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  //logout handler remove local storage data and send to login page
  logoutMethod = (e) => {
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem("taskData")
    this.props.history.push('/')
    window.location.reload();
  }


  //On submit handler for the form and storage of data
  OnSubmitFromMethod = e => {
    e.preventDefault();

    //input validation with help of react-simple-validator
    if (this.validator.allValid()) {
      let data = {
        Username: this.state.username,
        Password: this.state.password
      };

      //user data set inside local storage
      window.localStorage.setItem("userData", JSON.stringify(data));

      //user after login send to the home page
      this.props.history.push('/')
      window.location.reload();

    }
    else {
      this.validator.showMessages();
    }
  }



  render() {

    let userData = window.localStorage.getItem("userData");
    // console.log(userData)

    return (
      <div className="pb-5 mt-5" style={{ border: "2px solid black" }}>
        <Form className="col-md-8 mx-auto mt-4" onSubmit={this.OnSubmitFromMethod}>

          {/* Username Input tag */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              onChange={this.OnChangeMethod}
              value={this.state.username}
              placeholder="Enter Username"
            />
            {this.validator.message('username', this.state.username, 'required|min:3|max:50')}
          </Form.Group>


          {/* passowrd Input tag */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.OnChangeMethod}
              placeholder="Password"
            />
            {this.validator.message("password", this.state.password, "required|min:4|max:50")}
          </Form.Group>


          {/*  Logout & ChangePassowrd buttons based on user login or not */}
          {!userData ? <div>
            <Button variant="success" type="submit" >
              Submit
              </Button>
          </div> :

            <div>
              <Button variant="dark" type="submit" onClick={this.OnSubmitFromMethod} > ChangePassowrd</Button>
              <Button className="ml-5" variant="danger" type="submit" onClick={this.logoutMethod} >
                Logout
              </Button>
            </div>
          }

        </Form>

      </div>
    );
  }
}
