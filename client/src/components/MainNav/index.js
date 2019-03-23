import React from "react";
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';


function MainNav(props) {

    var headerStyle = () => {
        if (props.window.width < 770) {
            return {
                height: "auto",
                overflow: "visible",
            }
        }
        return {
            height: (props.window.height - 1) + "px",
            minHeight: "300px",
        }
    };
    var fullSpan = () => {
        if (props.window.width < 770) {
            return ""
        }
        return "w-100"
    };


    var test = (e) => {
        console.log(e)
        console.log("test")
    }
    return (
        <Navbar collapseOnSelect expand="sm" variant="dark" style={headerStyle()}
            className="col-12 col-xl-2 col-md-3 shadow-lg bg-dark-blue o-85 d-sm-flex flex-md-column justify-content-between">
            <Navbar.Brand className="p-0 my-md-4 mx-md-auto bg-transparent" href="#home">
                <Button type="button" variant="outline-warning">
                    <i className="fas fa-users"></i> People Connect
                    </Button>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className={"d-md-flex flex-md-column " + fullSpan()}>

                <Nav variant="pills" defaultActiveKey="#features" className={"mr-auto d-md-flex flex-md-column " + fullSpan()}>
                    <Nav.Link className="text-center" href="#company">
                        <i className="far fa-building"></i> Company
                        </Nav.Link>
                    <Nav.Link className="text-center" href="#ticket">
                        <i className="fas fa-clipboard-list"></i> Ticket
                        </Nav.Link>
                    <Nav.Link className="text-center" href="#staff">
                        <i className="fas fa-users"></i> Staff
                        </Nav.Link>
                    <NavDropdown className="text-center" title={<><i className="fas fa-plus-circle"></i> NEW</>}>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav variant="pills" className={"d-md-flex flex-md-column " + fullSpan()} onClick={props.showModal}>
                    <Nav.Link className="text-center" href="#deets">More deets</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainNav;