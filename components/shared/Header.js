import React, { useState } from "react";
import Link from "next/link";
import ActiveLink from "../ActiveLink";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import auth0 from "../../services/auth0";

const BsNavLink = (props) => {
  const { route, title } = props;
  const className = props.className || ''

  return (
    <ActiveLink activeClassName="active" route={route}>
      <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
    </ActiveLink>
  );
};

const Login = () => {
  return (
    <span
      onClick={auth0.login}
      className="nav-link  port-navbar-link clickable"
    >
      {" "}
      Login{" "}
    </span>
  );
};

const Logout = () => {
  return (
    <span
      onClick={auth0.logout}
      className="nav-link  port-navbar-link clickable"
    >
      {" "}
      Logout{" "}
    </span>
  );
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdownOpen = () => setDropdownOpen((prevState) => !prevState);

  const renderBlogMenu = () => {
    const { isSiteOwner } = props;

    if (isSiteOwner) {
      return (
        <Dropdown
          className="port-navbar-link port-dropdown-menu"
          nav
          isOpen={dropdownOpen}
          toggle={toggleDropdownOpen}
        >
          <DropdownToggle className="port-dropdown-toggle" nav caret>
            Blog
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <BsNavLink className="port-dropdown-item" route="/blogs" title="Blogs" />
            </DropdownItem>
            <DropdownItem>
              <BsNavLink className="port-dropdown-item" route="/blogeditor" title="Create Blog" />
            </DropdownItem>
            <DropdownItem>
              <BsNavLink className="port-dropdown-item" route="/userblogs" title="Blogs Dashboard" />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }
    return (
      <NavItem className="port-navbar-item">
        <BsNavLink route="/blogs" title="Blogs" />
      </NavItem>
    );
  };

  const { isAuthenticated, user, className } = props;
  const menuOpenClass = isOpen ? 'menu-open' : 'menu-close'
  return (
    <div>
      <Navbar
        className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`}
        color="transparent"
        dark
        expand="md"
      >
        <NavbarBrand className="port-navbar-brand" href="/">
          Victoria Klimova
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/works" title="Work" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/contact" title="Contacts" />
            </NavItem>
            {renderBlogMenu()}
            {!isAuthenticated && (
              <NavItem className="port-navbar-item">
                <Login />
              </NavItem>
            )}
            {isAuthenticated && (
              <NavItem className="port-navbar-item">
                <Logout />
              </NavItem>
            )}
            {isAuthenticated && (
              <NavItem className="port-navbar-item">
                <span className="nav-link port-navbar-link"> {user.name} </span>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
