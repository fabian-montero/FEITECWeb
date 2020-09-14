import React from "react"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap"
import { Link } from "gatsby"
import Styles from "./dropdown.module.css"

const Dropdown = ({ text, pathsInfo }) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret className="text-dark">
      {text}
    </DropdownToggle>
    <DropdownMenu>
      {pathsInfo.map((info, index) => (
        <Link
          to={info.path}
          key={index}
          className="dropdown-item text-dark"
          style={{ whiteSpace: "pre-line" }}
          activeClassName={Styles.active}
        >
          {info.text}
        </Link>
      ))}
    </DropdownMenu>
  </UncontrolledDropdown>
)

export default Dropdown
