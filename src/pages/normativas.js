import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Item from "../components/Items/normativas/contenedorNorm"
import { Col } from "reactstrap"
import { AZUL_FEITEC } from "../config/consts"

const Normativas = ({ data }) => (
  <Layout>
    <SEO title="Normativas" />
    <Col className="mx-auto" xl="10" lg="10" md="11" sm="12" xs="12">
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.6rem",
          borderStyle: "solid",
          borderWidth: "0 0 0 0.5rem",
          borderColor: AZUL_FEITEC,
          marginTop: "2.5rem",
          whiteSpace: "pre",
        }}
      >
        {"  Normativas FEITEC"}
      </div>
      {data.allStrapiNormativa.edges.map((document, index) => (
        <Item
          data={{
            titulo: document.node.Nombre,
            descripcion: document.node.Descripcion,
            link: document.node.Link,
            id: document.node.id,
            fecha: document.node.Fecha_Publicacion,
          }}
          key={index}
        />
      ))}
    </Col>
  </Layout>
)

export default Normativas

export const normativasQuery = graphql`
  query NormativasQuery {
    allStrapiNormativa(sort: { fields: Fecha_Publicacion, order: DESC }) {
      edges {
        node {
          id
          Nombre
          Descripcion
          Link
          Fecha_Publicacion(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`
