import React from "react"
import "./styleNorm.css"
import { Row, Col } from "reactstrap"

const Descripcion = ({ data }) => (
  <Row>
    <Col lg="6" style={{ opacity: "0.7" }}>
      {data.descripcion}
    </Col>
  </Row>
)
export default Descripcion
