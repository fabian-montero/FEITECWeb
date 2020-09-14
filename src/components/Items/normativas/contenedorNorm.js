import React from "react"

//Components
import Descripcion from "./descripcionNorm"
import Titulo from "./tituloNorm"
import Fecha from "./fechaNorm"
import DownloadIcon from "../../../images/Icons/download.svg"

const Contenedor = ({ data }) => (
  <div style={{ margin: "3rem 0 0 2.6rem", padding: 0 }}>
    <Titulo data={{ titulo: data.titulo }} />
    <Fecha data={{ fecha: data.fecha }} />
    <Descripcion data={{ descripcion: data.descripcion }} />
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#024086", fontWeight: "bold" }}
    >
      <img
        src={DownloadIcon}
        style={{ width: "1rem", padding: 0, margin: 0 }}
      />
      {" Descargar PDF"}
    </a>
  </div>
)

export default Contenedor
