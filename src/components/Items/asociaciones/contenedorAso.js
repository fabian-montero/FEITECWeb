import React from "react"
import Descripcion from "./descripcionAso"
import Imagen from "./imagenAso"
import { Link } from "gatsby"
import {Row, Col,Container} from 'reactstrap';
// xl ="3" lg="3" md="3" md="5" sm= "11" xs ="12"

const Contenedor = ({ data }) => {
  data.nombre = data.nombre.toLowerCase()
  return (
    <Col  xl ="3" lg="3" md="5"  sm= "11" xs ="12" className="shadow m-4" style={{maxHeight:"350px", minHeight:"350px"}}>
    <Link to={`/${data.id}`}>
      <Imagen data={{ id: data.src, node: data.id }} />
      <Descripcion
        data={{
          acronimo: data.acronimo,
          nombre: data.nombre,
          sede: data.sede,
        }}
      />
    </Link>
    </Col>
  )
}
export default Contenedor
