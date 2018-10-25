import React,{Component} from 'react';
import logo from '../images/full-logo.png'


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';



class Navigation extends Component {
 constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render() { 
      return  (
        <div>
        <Navbar color="none" dark   fixed="top" expand="lg" id="mainNav">
        <div className="container" id="navbarResponsive">
          <NavbarBrand href="/"><img src={logo} className="navbar-brand logo" alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav  className="navbar-nav text-uppercase ml-auto" navbar>
              <NavItem>
                <NavLink href="#services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
      )
    }
}
 


export default Navigation