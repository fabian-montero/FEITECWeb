import React from "react"
import Styles from "./horarioInfo.module.css"
import { Col, Row } from "reactstrap"

const HorarioInfo = ({ route }) => {
  const hours = route.horariosSalida.split("\n")
  return (
    <Row className={`${Styles.container} `}>
      {hours.map((elem, index) => (
        <Col
          xl="2"
          lg="2"
          md="4"
          sm="6"
          xs="6"
          key={index}
          className={`${Styles.hours}`}
        >
          {elem}
        </Col>
      ))}
      <Col
        className={`${Styles.infoExtra} mx-auto`}
        xl="11"
        lg="11"
        md="11"
        sm="11"
        xs="11"
      >
        {route.infoExtra}
      </Col>
    </Row>
  )
}

export default HorarioInfo
