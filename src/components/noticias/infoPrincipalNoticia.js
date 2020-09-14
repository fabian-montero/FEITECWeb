import React from "react"
import { Row } from "reactstrap"
import Styles from "./infoPrincipalNoticia.module.css"

const InfoPrincipalNoticia = ({ titulo, fecha, autor }) => {
  fecha = new Date(fecha)
  fecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear()
  return (
    <>
      <Row className={Styles.titulo}>{titulo}</Row>
      <Row className={Styles.info}>{`${fecha}, ${autor}`}</Row>
    </>
  )
}

export default InfoPrincipalNoticia
