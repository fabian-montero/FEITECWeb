import React from "react"
import { Media } from "reactstrap"
import Styles from "./styleCons-Org.module.css"
const ImagenOrgano = ({ data }) => {
  return <Media src={data.id} alt="Not Found" className={Styles.imagen} />
}
export default ImagenOrgano
