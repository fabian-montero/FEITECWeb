import React from "react"
import Styles from "./styleCons-Org.module.css"

const Titulo = ({ data }) => {
  return <h3 className={Styles.titulo}> {data.titulo} </h3>
}
export default Titulo
