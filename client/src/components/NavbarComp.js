import React, {Component} from "react";
import { Navbar, Nav } from "react-bootstrap";


export default class NavbarComp extends Component{
    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#">Group Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-center"
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Python</Nav.Link>
                        <Nav.Link href="#action3">MERN</Nav.Link>
                        <Nav.Link href="#action4">Java</Nav.Link>
                        <Nav.Link href="#action5">Help</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}