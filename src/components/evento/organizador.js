import React from "react"
import Styles from "./organizador.module.css"
import { AZUL_FEITEC } from "../../config/consts"

const Organizador = ({ text }) => (
  <div className={Styles.text} style={{ color: AZUL_FEITEC }}>
    {"Organizado por: " + text}
  </div>
)

export default Organizador
