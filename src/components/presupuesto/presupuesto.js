import React from "react"
import { Table } from "reactstrap"
import "./presupuesto.css"
import PresupuestoLine from "./presupuestoLine"

//import DownloadIcon from "../../images/Icons/download.svg"

//      <div className="marker"></div>
const Presupuesto = ({ data }) => {
  return (
    <Table size="sm" responsive>
      <thead className="tableHead">
        <tr>
          <th>Descargar</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Publicado</th>
          <th>Desde</th>
          <th>Hasta</th>
        </tr>
      </thead>
      <tbody>
        {data.map((presupuesto, index) => (
          <tr className={"tabeline light"} key={index}>
            <PresupuestoLine data={presupuesto} />
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Presupuesto
