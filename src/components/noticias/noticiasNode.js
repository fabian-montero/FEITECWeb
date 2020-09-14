import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../layout/layout"
import ImageGroup from "../imagenes/group/imageGroup"
import InfoPrincipalNoticia from "../noticias/infoPrincipalNoticia"
import DescripcionNoticia from "../noticias/descripcionNoticia"
import { Col, Row } from "reactstrap"
import close from "../../images/Icons/cross.png"
import Titulo from "../titulo/titulo"
import SEO from "../seo"

const NoticiasNode = ({ data }) => {
  console.log({ data })
  return (
    <Layout>
      <SEO title="Noticia" />
      <Col className="mx-auto" xl="10" lg="10" md="11" sm="12" xs="12">
        <Titulo Color="#9AC42F" Text="Noticia" />
      </Col>
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
        ></Col>
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
              <ImageGroup images={data.strapiNoticia.imagenes} />
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
              <Link to="/">
                {" "}
                <img
                  src={close}
                  alt="Cerrar Noticia"
                  style={{
                    marginTop: "1rem",
                    marginRight: "1rem",
                    height: "1rem",
                    float: "right",
                  }}
                />
              </Link>
              <InfoPrincipalNoticia
                titulo={data.strapiNoticia.titulo}
                fecha={data.strapiNoticia.fecha}
                autor={data.strapiNoticia.autor}
              />

              <DescripcionNoticia descipcion={data.strapiNoticia.descripcion} />
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
        ></Col>
      </Row>
    </Layout>
  )
}

export default NoticiasNode

export const query = graphql`
  query NoticiaTemplate($id: String!) {
    strapiNoticia(id: { eq: $id }) {
      fecha
      titulo
      descripcion
      autor
      imagenes {
        url
      }
    }
  }
`
