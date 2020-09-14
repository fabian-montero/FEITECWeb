import React from "react"
import "./eventohistorico.css"
import {Media } from "reactstrap"

const EventoHistortico = ({evento}) => {
  return (
            <li class="timeline-item bg-white rounded ml-3 p-4 shadow border border-dark">
                <div class="timeline-arrow"></div>
                <h2 class="h5 mb-0">{ evento.nombre }</h2><span class="small text-gray"><i class="fa fa-clock-o mr-1"></i>{ 1900 + (new Date(evento.fecha)).getYear()}</span>
                <Media className="hover_animated_grow" object src={evento.imagen.publicURL} alt={evento.nombre} />
                <p class="text-small mt-2 font-weight-light">{evento.descripcion}</p>
            </li>
    )
}
export default EventoHistortico;
