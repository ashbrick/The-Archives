import React, { Component } from "react";
import {
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container, 
    NavLink
} from 'reactstrap';

class AppNavBar extends Component {
    
    render(){
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="navbar-text mr-3">
                    <Container>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                To-Dos
                            </NavItem>
                            <NavItem>
                                Calendar
                            </NavItem>
                            <NavItem>
                                Learn
                            </NavItem>
                            <NavItem>
                                Job Search
                            </NavItem>
                            <NavLink>
                                Login
                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default (AppNavBar);