import React from "react"
import { Media } from "reactstrap"
import Styles from "./styleGrupos.module.css"
const ImagenGrupos = ({ data }) => {
  return <Media src={data.id} alt="Not Found" className={Styles.imagen} />
}
export default ImagenGrupos
