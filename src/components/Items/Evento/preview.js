import React from "react"
import { Media } from "reactstrap"

const Preview = ({ img }) => {
  return (
    <Media
      src={img ? img.url : ""}
      alt="Vista previa de evento"
      style={{ margin: 0 }}
    />
  )
}

export default Preview
