import React from "react"
import { Link } from "gatsby"
import { Navbar, NavbarToggler, Nav, Collapse, Media } from "reactstrap"

import { HEADER } from "../../config/consts"
import Dropdown from "./dropdown"
import Item from "./item"
import pathInfo from "../../config/pathInfo"
import logo from "../../images/Logo-Feitec.png"

class MainHeader extends React.Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      collapsed: true,
      maxLogoSize: 5,
      lastScrollTop: 0,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll(event) {
    let scrollTop = window.pageYOffset
    const changeAmount = 0.05
    if (scrollTop > this.state.lastScrollTop && this.state.maxLogoSize > 3) {
      this.setState({
        maxLogoSize: this.state.maxLogoSize - changeAmount,
        lastScrollTop: scrollTop,
      })
    } else if (
      this.state.maxLogoSize < 5 &&
      this.state.lastScrollTop > scrollTop
    ) {
      this.setState({
        maxLogoSize: this.state.maxLogoSize + changeAmount,
        lastScrollTop: scrollTop,
      })
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
        <NavbarToggler onClick={this.toggleNavbar} className="ml-2" />
        <Collapse navbar isOpen={!this.state.collapsed}>
          <Nav navbar className="mx-auto">
            {HEADER.map((info, index) => {
              let icon = <></>
              if (index === HEADER.length / 2) {
                icon = (
                  <Link
                    to="/"
                    className="navbar-brand mx-auto"
                    key={index + 10}
                  >
                    <Media
                      src={logo}
                      style={{
                        maxHeight: this.state.maxLogoSize + "rem",
                        margin: "auto",
                      }}
                      key={index + 10}
                    />
                  </Link>
                )
              }
              if (info instanceof pathInfo) {
                return (
                  <>
                    {icon}
                    <Item path={info.path} text={info.text} key={index} />
                  </>
                )
              } else {
                return (
                  <>
                    {icon}
                    <Dropdown
                      text={info.name}
                      pathsInfo={info.pathInfo}
                      key={index}
                    />
                  </>
                )
              }
            })}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default MainHeader
