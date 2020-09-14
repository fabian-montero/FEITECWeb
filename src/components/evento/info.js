import React from "react"
import Styles from "./info.module.css"
import { AZUL_FEITEC } from "../../config/consts"

const Info = ({ ubicacion, fecha, sede }) => {
  fecha = new Date(fecha)
  fecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear()

  return (
    <div className={Styles.bar} style={{ borderColor: AZUL_FEITEC }}>
      <p className={Styles.text} style={{ color: AZUL_FEITEC }}>
        {"Fecha: " + fecha + "\nLugar: " + ubicacion + "\nSede: " + sede}
      </p>
    </div>
  )
}

export default Info
