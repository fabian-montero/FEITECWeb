import React from "react"
import { Link } from "gatsby"
import { Navbar, NavbarToggler, Nav, Collapse, Media } from "reactstrap"

import { HEADER } from "../../config/consts"
import Dropdown from "./dropdown"
import Item from "./item"
import pathInfo from "../../config/pathInfo"
import logo from "../../images/Logo-Feitec.png"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <Navbar light expand="md" style={{ backgroundColor: "#eeeeee" }}>
        <Link to="/" className="navbar-brand mr-auto text-dark">
          <Media src={logo} className="mx-auto" style={{ maxHeight: "3rem" }} />
        </Link>
        <NavbarToggler onClick={this.toggleNavbar} className="ml-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar card>
            {HEADER.map((info, index) => {
              if (info instanceof pathInfo) {
                return <Item path={info.path} text={info.text} key={index} />
              } else {
                // Tipo dropdownInfo
                return (
                  <Dropdown
                    text={info.name}
                    pathsInfo={info.pathInfo}
                    key={index}
                  />
                )
              }
            })}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header
