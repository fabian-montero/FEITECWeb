import React from "react"
import { Link } from "gatsby"
import ImageGroup from "../imagenes/group/imageGroup"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import InfoPrincipalNoticia from "./infoPrincipalNoticia"
import DescripcionNoticia from "./descripcionNoticia"
import { Col, Row, Button, Media } from "reactstrap"
import Styles from "./noticiaIndex.module.css"

import close from "../../images/Icons/cross.png"

const Noticia = ({ selected, onClick, next, prev, index }) => {
  return (
    <Row
      className="mx-auto"
      style={{
        padding: 0,
        marginTop: "5rem",
      }}
    >
      <Col
        xs="1"
        sm="1"
        md="1"
        lg="1"
        xl="1"
        className="my-auto"
        style={{ padding: 0 }}
      >
        <FaAngleLeft
          style={{ fontSize: "3rem", opacity: 0.3, float: "right" }}
          onClick={prev}
        />
      </Col>
      <Col
        xs="10"
        sm="10"
        md="10"
        lg="10"
        xl="10"
        style={{
          padding: 0,
          boxShadow: "-1rem 1rem 0.5rem rgba(0, 0, 0, 0.18)",
          borderRadius: "0.5rem",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Row>
          <Col
            xs="12"
            sm="12"
            md="5"
            lg="5"
            xl="5"
            style={{ borderRadius: "0.5rem 0 0 0.5rem" }}
            className="my-auto"
          >
            {index == false ? (
              <ImageGroup images={selected.imagenes} />
            ) : (
              <Media src={selected.imagenes[0].url} className={Styles.image} />
            )}
          </Col>
          <Col
            xs="12"
            sm="12"
            md="7"
            lg="7"
            xl="7"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "0 0.5rem 0.5rem 0",
            }}
          >
            {index == false ? (
              <img
                src={close}
                alt="Cerrar Noticia"
                style={{
                  marginTop: "1rem",
                  marginRight: "1rem",
                  height: "1rem",
                  float: "right",
                }}
                onClick={onClick}
              />
            ) : (
              <></>
            )}
            {selected.autor !== undefined ? (
              <InfoPrincipalNoticia
                titulo={selected.titulo}
                fecha={selected.fecha}
                autor={selected.autor}
              />
            ) : (
              <InfoPrincipalNoticia
                titulo={selected.titulo}
                fecha={selected.fecha}
                autor={selected.tag}
              />
            )}

            {index !== false ? (
              <DescripcionNoticia
                descipcion={selected.descripcion.substr(0, 480) + "..."}
              />
            ) : (
              <DescripcionNoticia descipcion={selected.descripcion} />
            )}
            {index !== false ? (
              <div
                style={{
                  whiteSpace: "pre-line",
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <Link to={selected.id}>
                  <Button variant="secondary" size="sm">
                    Leer más{" "}
                  </Button>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Col>
      <Col
        xs="1"
        sm="1"
        md="1"
        lg="1"
        xl="1"
        className="my-auto"
        style={{ padding: 0 }}
      >
        <FaAngleRight
          style={{ fontSize: "3rem", opacity: 0.3, float: "left" }}
          onClick={next}
        />
      </Col>
    </Row>
  )
}

export default Noticia
