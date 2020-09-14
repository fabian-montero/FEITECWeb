import React from "react"
import { Col, Row } from "reactstrap"
import Logo from "../../images/Icons/FeitecWhite.png"

const Bienvenida = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 480
  const imgStyle = isMobile
    ? {
        height: "inherit",
        paddingTop: "1rem",
      }
    : {
        width: "60%",
        float: "right",
        padding: 0,
      }

  const textStyle = isMobile
    ? {
        margin: "auto",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "4rem",
      }
    : {
        margin: "auto",
        color: "white",
        fontWeight: "bold",
        fontSize: "5rem",
      }
  return (
    <Row
      style={{
        backgroundColor: "#9AC42F",
        minHeight: "25rem",
        display: "flex",
        alignContent: "center",
      }}
    >
      <Col xs="12" sm="12" md="5" lg="5" xl="5" style={{ margin: "auto" }}>
        <img src={Logo} alt="Logo de Feitec" style={imgStyle} />
      </Col>
      <Col xs="11" sm="11" md="7" lg="7" xl="7" style={textStyle}>
        Bienvenidos
      </Col>
    </Row>
  )
}

export default Bienvenida
