import React from "react"
import Styles from "./styleGrupos.module.css"

const TituloGrupos = ({ data }) => {
  console.log(data)
  return <h3 className={Styles.titulo}> {data.titulo} </h3>
}
export default TituloGrupos
