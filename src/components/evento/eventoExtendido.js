import React from "react"
import Titulo from "./titulo"
import Styles from "./eventoExtendido.module.css"
import Descripcion from "./descripcion"
import Info from "./info"
import Organizador from "./organizador"
import { CSSTransition } from "react-transition-group"
import DropdownController from "../toggle/dropdownController"
import ImageGroup from "../imagenes/group/imageGroup"

class EventoExtendido extends React.Component {
  render() {
    return this.props.status ? (
      <>
        <CSSTransition
          key={this.props.data.id}
          timeout={500}
          appear
          in={this.props.status}
          classNames="fade"
          className={Styles.rect}
        >
          <div>
            <Titulo
              text={this.props.data.nombre}
              onClick={this.props.onClick}
            />
            <ImageGroup images={this.props.images} />
            <Info
              ubicacion={this.props.data.ubicacion}
              fecha={this.props.data.fecha}
              sede={this.props.data.sedes[0].nombre}
            />
            <Descripcion text={this.props.data.descripcion} />
            <Organizador text={this.props.data.carreras[0].nombre} />
            <DropdownController
              onClick={this.props.onClick}
              style={{
                position: "absolute",
                margin: "1rem",
                bottom: 0,
                right: 0,
              }}
            />
          </div>
        </CSSTransition>
      </>
    ) : (
      <></>
    )
  }
}

export default EventoExtendido
