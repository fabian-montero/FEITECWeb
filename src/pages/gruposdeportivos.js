import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Contenedor from "../components/Items/gruposdeoprtivos-culturales/contenedorGrupos"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"

function GruposDeportivos({ data }) {
  return (
    <Layout>
      <SEO title="Grupos Deportivos" />
      <Col className="mx-auto" xl="10" lg="10" md="11" sm="12" xs="12">
        <h2 style={{ textAlign: "center" }}>Grupos Deportivos</h2>
        <h4
          style={{ textAlign: "center", fontWeight: "normal", text: "muted" }}
        >
          En el TEC existen grupos deportivos en los cuales te podés involucrar
          de forma complementaria a tus estudios. Acá te mencionamos los grupos
          pertenecientes a la Unidad de Deporte del TEC:
        </h4>
        <Row>
          {data.allStrapiGrupodeportivo.edges.map((document, index) => (
            <Col
              xl="4"
              lg="4"
              md="4"
              sm="12"
              xs="12"
              className="my-3 mxauto"
              key={index}
            >
              <Contenedor
                data={{
                  titulo: document.node.Nombre,
                  link: document.node.Link,
                  src: document.node.Preview.childImageSharp.fluid.src,
                }}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Layout>
  )
}

export default GruposDeportivos

export const gruposDeportivosQuery = graphql`
  query gruposDeportivosQuery {
    allStrapiGrupodeportivo(sort: { fields: Nombre, order: ASC }) {
      edges {
        node {
          Nombre
          Link
          Preview {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`
