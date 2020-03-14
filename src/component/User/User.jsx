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
    console.log("user props", props)
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }


  OnChangeMethod = e => {
    this.setState({ [e.target.name]: e.target.value });
  };



  logoutMethod = (e) => {
    window.localStorage.removeItem("userData");
    window.localStorage.removeItem("taskData")
    this.props.history.push('/')
    window.location.reload();
  }



  OnSubmitFromMethod = e => {
    e.preventDefault();
    if (this.validator.allValid()) {

      let data = {
        Username: this.state.username,
        Password: this.state.password
      };
      window.localStorage.setItem("userData", JSON.stringify(data))
      this.props.history.push('/')
      window.location.reload();

    }
    else {
      this.validator.showMessages();
    }
  }



  render() {

    let userData = window.localStorage.getItem("userData");
    console.log(userData)

    return (
      <div>

        <Form onSubmit={this.OnSubmitFromMethod}>
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

          {
            !userData ? <div>
              <Button variant="success" type="submit" >
                Submit
              </Button>

              {/* <Button className="ml-5" variant="danger" type="submit" onClick={this.logoutMethod} >
                Logout
             </Button> */}
            </div> :

              <div>
                <Button variant="dark" type="submit" onClick={this.OnSubmitFromMethod} >
                  ChangePassowrd
             </Button>

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
