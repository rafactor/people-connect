import React from "react";
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';

function headerStyle(window) {
    if (window.width < 770) {
        return {
            height: "auto",
            overflow: "visible",
        }
    }
    return {
        height: (window.height - 1) + "px",
        minHeight: "300px",
    }
}
function MainNav(props) {


    return (
        <Navbar collapseOnSelect expand="sm" variant="dark" style={headerStyle(props.window)}
            className="col-12 col-xl-2 col-md-3 shadow-lg bg-dark-blue o-85 d-sm-flex flex-md-column justify-content-between">
            <Navbar.Brand className="p-0 my-md-4 mx-md-auto bg-transparent" href="#home">
                <Button type="button" variant={props.items.brand.variant} onClick={props[props.items.brand.onClick]}>
                    <i className={props.items.brand.icon}></i> {props.items.brand.text}
                </Button>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className={`d-md-flex flex-md-column ${(props.window.width > 770) ? "w-100" : ""}`}>

                <Nav variant="pills" defaultActiveKey="#features" className={`mr-auto d-md-flex flex-md-column ${(props.window.width > 770) ? "w-100" : ""}`}>
                    {props.items.left.map(navItem => {
                        //Nav.Link item 
                        if (navItem.constructor === Object) {
                            return (
                                <Nav.Link className="text-center" onClick={props[navItem.onClick]} href={navItem.href || ""}>
                                    <i className={navItem.icon || ""}></i> {navItem.text || ""}
                                </Nav.Link>
                            )
                        }
                        //Array ==> NavDropdown item
                        if (navItem.constructor === Array) {
                            return (
                                <NavDropdown className="text-center" title={<><i className={navItem[0].icon || ""}></i> {navItem[0].text || ""}</>}>
                                    {navItem.slice(1).map(item => (
                                        (item.type) ?
                                            <NavDropdown.Divider /> :
                                            <NavDropdown.Item onClick={props[item.onClick]} href={item.href || ""}><i className={item.icon || ""}></i> {item.text || ""}</NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            )
                        }
                        //Default ==> blank
                        return (<></>)
                    })}
                </Nav>

                <Nav variant="pills" className={`d-md-flex flex-md-column ${(props.window.width > 770) ? "w-100" : ""}`}>
                    {props.items.right.map(navItem => {
                        //Nav.Link item 
                        if (navItem.constructor === Object) {
                            return (
                                <Nav.Link className="text-center" onClick={props[navItem.onClick]} href={navItem.href || ""}>
                                    <i className={navItem.icon || ""}></i> {navItem.text || ""}
                                </Nav.Link>
                            )
                        }
                        //Array ==> NavDropdown item
                        if (navItem.constructor === Array) {
                            return (
                                <NavDropdown className="text-center" title={<><i className={navItem[0].icon || ""}></i> {navItem[0].text || ""}</>}>
                                    {navItem.slice(1).map(item => (
                                        (item.type) ?
                                            <NavDropdown.Divider /> :
                                            <NavDropdown.Item onClick={props[item.onClick]} href={item.href || ""}><i className={item.icon || ""}></i> {item.text || ""}</NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            )
                        }
                        //Default ==> blank
                        return (<></>)
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MainNav;