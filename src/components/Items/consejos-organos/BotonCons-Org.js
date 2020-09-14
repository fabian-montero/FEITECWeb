import React from "react"
import { Link } from "gatsby"
const Boton = ({ data }) => {
  return (
    <Link to={`/${data.link}`}>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        style={{ fontSize: "0.85rem" }}
      >
        {" "}
        Ver{" "}
      </button>
    </Link>
  )
}

export default Boton
