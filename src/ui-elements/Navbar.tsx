import React, {useState} from "react";
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

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
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Todos</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
};
