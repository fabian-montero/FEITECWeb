import React from "react"
import Styles from "./dropdownController.module.css"
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa"

const DropdownController = ({ isOpen, onClick, style }) => {
  return isOpen ? (
    <FaAngleDoubleDown
      className={Styles.controller}
      onClick={onClick}
      style={style}
    />
  ) : (
    <FaAngleDoubleUp
      className={Styles.controller}
      onClick={onClick}
      style={style}
    />
  )
}

export default DropdownController
