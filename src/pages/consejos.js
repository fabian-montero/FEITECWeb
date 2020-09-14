import React from "react"
import { graphql } from "gatsby"
import Contenedor from "../components/Items/consejos-organos/contenedorCons-Org"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Row, Col, Container } from "reactstrap"
function Consejos({ data }) {
  return (
    <Layout>
      <SEO title="Consejos" />
      <Col className="mx-auto" xl="10" lg="10" md="11" sm="12" xs="12">
        <Row md="4">
          {data.allStrapiConsejo.edges.map((document, index) => (
            <Container>
              <Contenedor
                data={{
                  id: document.node.id,
                  src: document.node.foto.childImageSharp.fixed.src,
                  nombre: document.node.nombre,
                }}
                key={index}
              />
            </Container>
          ))}
        </Row>
      </Col>
    </Layout>
  )
}

export default Consejos

export const pageQuery = graphql`
  query ConsejosQuery {
    allStrapiConsejo {
      edges {
        node {
          id
          nombre
          foto {
            id
            childImageSharp {
              fixed(height: 200, width: 400, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  }
`
