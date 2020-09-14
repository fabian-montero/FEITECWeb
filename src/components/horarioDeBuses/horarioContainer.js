import React from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import HorarioInfo from "./horarioInfo"

class HorarioContainer extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.routes)
    this.state = {
      selected: 0,
      routes: props.routes,
      dropdownOpen: false,
    }
    this.selectRoute = this.selectRoute.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  selectRoute(index) {
    this.setState({ selected: index, dropdownOpen: false })
  }

  toggle() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }
  render() {
    return (
      <div style={{ marginTop: "5rem" }}>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle
            caret
            style={{
              width: "100%",
              textAlign: "justify",
              backgroundColor: "#CFCFCF",
              paddingLeft: "2rem",
              color: "#000",
              fontWeight: "bold",
              border: 0,
            }}
          >
            {this.state.routes[this.state.selected].node.nombreRuta}
          </DropdownToggle>
          <DropdownMenu
            style={{ width: "100%", maxHeight: "10rem", overflow: "auto" }}
          >
            {this.state.routes.map((elem, index) => (
              <DropdownItem
                key={elem.node.strapiId}
                onClick={() => this.selectRoute(index)}
                style={{ width: "100%" }}
              >
                {elem.node.nombreRuta}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <HorarioInfo route={this.state.routes[this.state.selected].node} />
      </div>
    )
  }
}

export default HorarioContainer
