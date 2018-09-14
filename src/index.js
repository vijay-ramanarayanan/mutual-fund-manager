import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Table, Navbar, Nav, NavItem } from "react-bootstrap";
import AlertDismissable from "./AlertDismissable";
import SideBar from './Components/SideBarComponent';
import Dashboard from './Components/DashboardComponent';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };

  }



  render() {
    return(
      <div className = "container-fluid">
            <div className="row">
        <SideBar x/>
        <Dashboard/>
      </div>

      
      </div>
      
    )
  }
}




//disabled

  /*render() {
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <AlertDismissable />
      </div>
    );
  }*/



render(<App />, document.getElementById('root'));
