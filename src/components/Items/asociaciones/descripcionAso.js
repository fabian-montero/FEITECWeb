import React,{Fragment} from "react"
import { Col, Row, Container } from "reactstrap"
import "./styleAso.css"

const Descripcion = ({ data }) => {
  return (
    <Container> 
        <Row className="mb-0">
        <h6 className="text-muted m-1" style={{ overflow:"hidden"}}>{data.nombre}</h6>
        </Row>
        <Row className="mt-auto mb-0" style={{position:"absolute",bottom:"10px"}}>
        <h4 className="text-muted m-1">{data.acronimo}</h4>
        </Row>
    </Container>
  )
}

/*
  <Col>
          <h4 className="sede">{data.sede}</h4>
        </Col>
*/
export default Descripcion
