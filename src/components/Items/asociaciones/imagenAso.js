import React from "react"
import { CardImg,Media } from "reactstrap"

const Imagen = ({ data }) => {
  return <Media className="mx-auto" src={data.id} alt="Not Found" style={{maxHeight:"250px",minHeight:"250px"}} />
}

export default Imagen
