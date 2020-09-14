import React from "react"
import EventoExtendido from "./eventoExtendido"
import ItemEvento from "../Items/Evento/ItemEvento"
import "./evento.css"

class Evento extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <>
        <ItemEvento
          data={this.props.data}
          onClick={this.toggle}
          status={!this.state.open}
        />
        <EventoExtendido
          data={this.props.data}
          onClick={this.toggle}
          status={this.state.open}
          images={this.props.data.imagenes}
        />
      </>
    )
  }
}

export default Evento
