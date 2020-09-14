import React from "react"
import { Col } from "reactstrap"

const Titulo = ({ Color, Text }) => (
  <Col
    style={{
      color: Color,
      marginTop: "4rem",
      marginBottom: "-2rem",
      fontSize: "3rem",
      fontWeight: "bold",
    }}
  >
    {Text}
  </Col>
)

export default Titulo
