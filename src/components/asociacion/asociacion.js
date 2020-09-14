import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import SEO from "../seo"
import {
  Card,
  CardImg,
  CardHeader,
  Col,
  Row,
  CardBody,
  CardFooter,
} from "reactstrap"

const Asociacion = ({ data }) => {
  const integrantes = data.strapiAsociacion.integrantes.split("\n")
  return (
    <Layout>
      <SEO title="Feitec" />
      <Card>
        <CardHeader>
          <Row>
            <Col>
              <h1>{data.strapiAsociacion.nombre}</h1>
              <small className="text-muted">
                {data.strapiAsociacion.acronimo}
              </small>
            </Col>
            <Col lg="2">
              <CardImg
                top
                src={data.strapiAsociacion.logo.childImageSharp.fluid.src}
                alt="Logo de Asociación"
              />
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          {data.strapiAsociacion.infovariadas.map((document, index) => (
            <div key={index}>
              <h3>{document.nombre + ":"}</h3>
              <p>{document.descripcion}</p>
            </div>
          ))}
        </CardBody>
        <CardFooter>
          <h3>Integrantes:</h3>
          <ul>
            {integrantes.map((integrante, index) => (
              <li key={index}>{integrante}</li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </Layout>
  )
}

export default Asociacion

export const query = graphql`
  query AsociacionTemplate($id: String!) {
    strapiAsociacion(id: { eq: $id }) {
      nombre
      acronimo
      integrantes
      infovariadas {
        asociacion
        descripcion
        nombre
        id
      }
      logo {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`
