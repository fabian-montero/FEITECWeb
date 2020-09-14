import React from "react"
import Imagen from "./imagenGrupos"
import Titulo from "./tituloGrupos"
import Styles from "./styleGrupos.module.css"

const Contenedor = ({ data }) => {
  console.log(data)
  return (
    <a href={data.link} target="_blank" rel="noopener noreferrer">
      <div className={Styles.wrapper}>
        <Imagen data={{ id: data.src }} />
        <Titulo data={{ titulo: data.titulo }} />
      </div>
    </a>
  )
}

export default Contenedor
