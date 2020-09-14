import React, { Fragment } from "react"
import { Media } from "reactstrap"
import DownloadIcon from "../../images/Icons/download.svg"
import NormalDate from "./datePresupuesto"
const PresupuestoLine = ({ data }) => {
  return (
    <Fragment>
      <td scope="row">
        <a href={data.archivo.url} target="_blank" rel="noopener noreferrer">
          <Media
            src={DownloadIcon}
            style={{
              minWidth: "1.5rem",
              maxHeight: "2rem",
            }}
          />
        </a>
      </td>
      <td>{data.nombre}</td>
      <td>{data.descripcion}</td>
      <td>
        <NormalDate date={new Date(data.createdAt)} className="date" />
      </td>
      <td>
        <NormalDate date={new Date(data.inicio)} />
      </td>
      <td>
        <NormalDate date={new Date(data.fin)} className="date" />
      </td>
    </Fragment>
  )
}

export default PresupuestoLine
