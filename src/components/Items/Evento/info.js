import React from "react"
import Titulo from "./titulo"
import Description from "./descripcion"
import DropdownController from "../../toggle/dropdownController"
import { Container, Col } from "reactstrap"

const Info = ({ nombre, desc, onClick }) => (
  <Container style={{ overflow: "hidden" }}>
    <Titulo nombre={nombre} />
    <Description desc={desc} />
    <DropdownController
      isOpen
      onClick={onClick}
      style={{ position: "absolute", margin: "1rem", bottom: 0, right: 0 }}
    />
    <Col lg={2}> </Col>
  </Container>
)

export default Info
