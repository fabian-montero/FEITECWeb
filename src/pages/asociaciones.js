import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Title from "../components/layout/Title"
import SEO from "../components/seo"
import Contenedor from "../components/Items/asociaciones/contenedorAso"
import {Row, Col,Container} from 'reactstrap';


function Asociaciones({ data }) {
  return (
    <Layout>
      <SEO title="Feitec" />
      <Title text ="Asociaciones"/>
      <Row className="align-items-center justify-content-center " style={{minWidth:"100%"}}>
        {data.allStrapiAsociacion.edges.map((document, index) => (
            <Contenedor
              data={{
                id: document.node.id,
                src: document.node.logo.childImageSharp.fluid.src,
                acronimo: document.node.acronimo,
                nombre: document.node.nombre,
                sede: document.node.sede.nombre,
              }}
            key={index}
            ></Contenedor>
        ))}
      </Row>

    </Layout>
  )
}

export default Asociaciones

export const asoQuery = graphql`
  query AsociacionesQuery {
    allStrapiAsociacion {
      edges {
        node {
          id
          nombre
          acronimo
          logo {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          sede {
            nombre
          }
        }
      }
    }
  }
`
