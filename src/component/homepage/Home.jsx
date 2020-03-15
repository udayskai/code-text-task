import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import InfoPage from './InfoPage';



class DropdownPage extends Component {
  constructor() {
    super();
    this.state = {
      data: "Default : Please select from dropdown for dynamic data"
    }
  }


  //on Click handler
  onClickMethod = (e) => {
    console.log(e)
    this.setState({ data: e })
  }


  render() {
    return (
      <div >
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic" size="lg">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ backgroundColor: "pink" }}>
            <Dropdown.Item href="#/action-1" onClick={() => { this.onClickMethod("Action") }}>Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={() => { this.onClickMethod("Another action") }}>Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={() => { this.onClickMethod("Something else") }}>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* passing data to infopage as a props */}
        <InfoPage props={this.state.data} />
      </div>
    );
  }
}

export default DropdownPage;
