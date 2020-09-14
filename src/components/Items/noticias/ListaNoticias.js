import React from "react"
import ItemNoticia from "./ItemNoticia"
import { Row } from "reactstrap"

const ListaNoticias = ({ noticias, onClick }) => (
  <Row>
    {noticias.map((doc, index) => (
      <ItemNoticia
        key={index}
        id={index}
        titulo={doc.titulo}
        publicador={doc.autor}
        fecha={doc.fecha}
        descripcion={doc.descripcion.substr(0, 100) + "..."}
        imagen={doc.imagenes[0].url}
        onClick={onClick}
      />
    ))}
  </Row>
)

export default ListaNoticias
