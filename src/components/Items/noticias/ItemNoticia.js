import React from "react"
import { Row, Col, Media, Container } from "reactstrap"
import { FaAngleRight, FaAutoprefixer } from "react-icons/fa"
import Styles from "./ItemNoticia.module.css"

const ItemNoticia = ({
  titulo,
  descripcion,
  publicador,
  fecha,
  imagen,
  onClick,
  id,
}) => {
  fecha = new Date(fecha)
  fecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear()
  return (
    <Row
      style={{
        marginTop: "3rem",
        width: "100%",
      }}
    >
      <Col
        xs="11"
        sm="11"
        md="8"
        lg="8"
        xl="8"
        className={`${Styles.contenedor} ${Styles.shadow}`}
        onClick={() => {
          onClick(id)
        }}
      >
        <Col xs="4" sm="4" md="4" lg="4" xl="4" style={{ height: "10rem" }}>
          <Media src={imagen} alt="" className={`${Styles.media} mx-auto`} />
        </Col>
        <Col xs="8" sm="8" md="8" lg="8" xl="8" style={{ height: "10rem" }}>
          <Row style={{ marginLeft: "0.5rem" }}>
            <Row className={Styles.titulo}>{titulo}</Row>
            <Row className={Styles.publicador}>
              {fecha}
              {", "}
              {publicador}
            </Row>
            <Row className={Styles.descripcion}>{descripcion}</Row>
          </Row>
        </Col>
      </Col>
    </Row>
  )
}
export default ItemNoticia

/*
<Row style={{ fontSize: "110%" }} className={Styles.titulo}>
              <Col>{titulo}</Col>
            </Row>
            <Row className={Styles.publicador}>
              <Col>
                {fecha}
                {", "}
                {publicador}
              </Col>
            </Row>
            <Row>
              <div style={{ fontSize: "90%" }} className={Styles.descripcion}>
                {descripcion}
              </div>
            </Row>
*/
