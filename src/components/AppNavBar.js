import React, { Component } from "react";
import {
    Navbar,
    Nav,
    NavItem,
    Container, 
    NavLink
} from 'reactstrap';

class AppNavBar extends Component {
    
    render(){
        return(
            <nav>
                <Navbar color="dark" dark expand="sm" className="navbar-text mr-3">
                    <Container>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                Task Manger
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
                            <NavItem>
                                Themes:button dropdown
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </nav>
        );
    }
}

export default (AppNavBar);