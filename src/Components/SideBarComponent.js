import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavDropdown, MenuItem  } from "react-bootstrap";
import './style.css';

export default class SideBar extends Component {
    
    constructor() {
        super()
        this.state = {
            activeKey : 2
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedKey) {
        //alert(`selected ${selectedKey}`);
        this.setState({
                activeKey : selectedKey
        });
      }



      render() {
        console.log(this.state.activeKey);
        return(

            <div id="sibebar-nav" className="col-sm-2 col-xs-4">

                <Nav  bsStyle="pills" stacked  onSelect={this.handleSelect} >
                    <NavItem id ="xxx" className ="xxx"  eventKey={1} href="/home">
                        <p className ="sidebar-menu-item">NavItem 1 content</p>
                    </NavItem>
                    <NavItem  className = {this.state.activeKey == 2 ? "yyy" : "xxx"}  eventKey={2} title="Item">
                    <p className ="sidebar-menu-item">NavItem 1 content</p>
                    </NavItem>
                    <NavItem className ="xxx"  eventKey={3}  >
                    <p className ="sidebar-menu-item">NavItem 1 content</p>
                    </NavItem>
                    <NavItem className ="xxx" eventKey={4} >
                    <p className ="sidebar-menu-item">NavItem 1 content</p>
                    </NavItem>
                    <NavItem className ="xxx" eventKey={5} >
                    <p className ="sidebar-menu-item">NavItem 1 content</p>
                    </NavItem>
                    <NavItem className ="xxx"   eventKey={6} >
                    <p className ="sidebar-menu-item">NavItem 1 content</p>
                    </NavItem>

                </Nav>
            </div>
        )
      }    
}




