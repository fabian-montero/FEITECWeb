import React from "react"
import Styles from "./ItemEvento.module.css"
import { CSSTransition } from "react-transition-group"
import Preview from "./preview"
import { Row, Col } from "reactstrap"
import Info from "./info"

class ItemEvento extends React.Component {
  render() {
    return this.props.status ? (
      <CSSTransition
        key={this.props.data.id}
        timeout={500}
        appear
        in={this.props.status}
        classNames="fade"
        className={Styles.container}
      >
        <Row>
          <Col lg="6" md="6" sm="12" xs="12" style={{ padding: 0 }}>
            <Preview img={this.props.data.preview} />
          </Col>
          <Col lg="6" md="6" sm="12" xs="12">
            <Info
              nombre={this.props.data.nombre}
              desc={this.props.data.descripcion.substring(0, 200) + "..."}
              onClick={this.props.onClick}
            />
          </Col>
        </Row>
      </CSSTransition>
    ) : (
      <></>
    )
  }
}

export default ItemEvento
