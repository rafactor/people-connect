import React from "react";
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import icons from "../icons.json"
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    let navItems = props.state.NavTabs(props.location.pathname);

    return (
        <Navbar collapseOnSelect expand="sm" variant="dark" style={headerStyle(props.state.window)}
            className="col-12 col-xl-2 col-md-3 shadow-lg bg-dark-blue o-85 d-sm-flex flex-md-column justify-content-between">
            <NavLink className="p-0 my-md-4 mx-md-auto bg-transparent navbar-brand" to={navItems.brand.to}>
                <Button type="button" variant={navItems.brand.variant} onClick={navItems.brand.onClick}>
                    <i className={icons[navItems.brand.icon].icon}></i> {t(navItems.brand.text)}
                </Button>
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className={`d-md-flex flex-md-column ${(props.state.window.width > 770) ? "w-100" : " "}`}>

                <Nav variant="pills" className={`mr-auto d-md-flex flex-md-column ${(props.state.window.width > 770) ? "w-100" : " "}`}>
                    {navItems.left.map((navItem, i) => {

                        //Array ==> NavDropdown item
                        if (navItem.main) {
                            return (
                                <NavDropdown key={i} className="text-center text-capitalize my-sm-2" title={<><i className={icons[navItem.main.icon].icon || " "}></i> {navItem.main.text || " "}</>}>
                                    {navItem.list.map((item, i) => (
                                        (item.type) ?
                                            <NavDropdown.Divider key={i} /> :
                                            <NavLink key={i} activeClassName="active" onClick={item.onClick} className={"dropdown-item"} to={item.to || " "}><i className={icons[item.icon].icon || " "}></i> {t(item.text) || " "}</NavLink>
                                    ))}
                                </NavDropdown>
                            )
                        } else {
                            //NavLink item 
                            return (

                                <NavLink key={i} activeClassName="active" className={`nav-link text-center text-capitalize my-sm-2 ${navItem.className}`} onClick={navItem.onClick} to={navItem.to || " "}>
                                    <i className={icons[navItem.icon].icon || " "}></i> {t(navItem.text) || " "}
                                </NavLink>
                            )
                        }

                    })}
                </Nav>

                <Nav variant="pills" className={`d-md-flex flex-md-column ${(props.state.window.width > 770) ? "w-100" : " "}`}>
                    {navItems.right.map((navItem, i) => {
                        //NavLink item 
                        if (navItem.constructor === Object) {
                            return (
                                <NavLink key={i} activeClassName="active" className="nav-link text-center text-capitalize" onClick={navItem.onClick} to={navItem.to || " "}>
                                    {(navItem.icon) ? <i className={icons[navItem.icon].icon || " "}></i> : <></>} {navItem.text || " "}
                                </NavLink>
                            )
                        }
                        //Array ==> NavDropdown item
                        if (navItem.constructor === Array) {
                            return (
                                <NavDropdown className="text-center text-capitalize" title={<><i className={icons[navItem[0].icon].icon || " "}></i> {navItem[0].text || " "}</>}>
                                    {navItem.slice(1).map((item, i) => (
                                        (item.type) ?
                                            <NavDropdown.Divider key={i} /> :
                                            <NavLink key={i} onClick={item.onClick} className={"dropdown-item"} to={item.to || " "}><i className={icons[item.icon].icon || " "}></i> {item.text || " "}</NavLink>
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