import React from "react"
import Styles from "./titulo.module.css"

const Titulo = ({ nombre }) => <div className={Styles.title}>{nombre}</div>

export default Titulo
