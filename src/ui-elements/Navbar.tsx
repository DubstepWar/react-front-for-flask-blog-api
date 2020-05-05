import React, {useState} from "react";
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {NavLink as ReactNavLink} from 'react-router-dom'

export const NavBar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md" className="mb-2">
            <Container>
                <NavbarBrand href="/">
                    FlaskBlog
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavLink>
                            <NavItem>
                                <ReactNavLink to="/">Home</ReactNavLink>
                            </NavItem>
                        </NavLink>
                        <NavLink>
                            <NavItem>
                                <ReactNavLink to="/todos">Todos</ReactNavLink>
                            </NavItem>
                        </NavLink>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
};
