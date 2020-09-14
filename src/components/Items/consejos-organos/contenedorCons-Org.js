import React from "react"
import Imagen from "./imagenCons-Org"
import Titulo from "./tituloCons-Org"
import Boton from "./BotonCons-Org"
import { Col, Row } from "reactstrap"

const Contenedor = ({ data }) => {
  data.nombre = data.nombre.toLowerCase()
  return (
    <Row style={{ marginTop: "2rem" }}>
      <Col xs="6" sm="4" style={{ padding: 0 }}>
        <Imagen data={{ id: data.src }} />
      </Col>
      <Col xs="6" sm="3" style={{ position: "relative" }}>
        <Titulo data={{ titulo: data.nombre }} />
        <div
          style={{
            position: "absolute",
            bottom: "30px",
          }}
        >
          <Boton data={{ link: data.id }} />
        </div>
      </Col>
    </Row>
  )
}

export default Contenedor
