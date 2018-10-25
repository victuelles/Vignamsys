import React,{Component} from 'react';
import AuthUserContext from './AuthUserContext'
import * as routes from '../constants/routes'
import SignOutButton from './SignOut';
import logo from "../images/logo.png";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';

const Navigation = () =>
    <AuthUserContext.Consumer> 
            {authUser=>authUser? <NavigationAuth/>:<NavigationNonAuth/>}
    </AuthUserContext.Consumer>



class NavigationAuth extends Component {
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
           <Navbar color="dark" dark expand="md">
             <NavbarBrand href="/"><img src={logo} className="navbar-brand logo" alt="logo" /></NavbarBrand>
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="ml-auto" navbar>
               <NavItem>
                   <NavLink href={routes.LANDING}>Home</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href={routes.JOIN_TOKEN_SALE}>Join Token Sale</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href={routes.USER_INFO}>Account</NavLink>
                 </NavItem>                 
                 <NavItem><SignOutButton/>
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
         </div>
         )
       }
   }
    

class NavigationNonAuth extends Component {
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
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/"><img src={logo} className="navbar-brand logo" alt="logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href={routes.JOIN_TOKEN_SALE}>Join Token Sale</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={routes.SIGN_IN}>Sign In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      )
    }
}
 


export default Navigation