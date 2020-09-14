import React from "react"
import { Link, graphql } from "gatsby"
import "./timeline.css"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import EventoHistorico from "../components/eventohistorico/eventohistorico"
import { Col, Row, Container } from "reactstrap"
//import DeleteList from "../components/deleteList"

//basado en https://bootstrapious.com/p/timeline
const Timeline = ({ data }) => {
  return (
    <Layout>
      <SEO title="Historia de Feitec " />
      <Container className="py-5">
        <Row className="text-center text-black mb-5">
          <Col className="mx-auto">
            <h1 className="display-4">
              Lucha estudiatil de los "parvulos guerrilleros" del TEC
            </h1>
            <p className="lead mb-0 text-muted text-justify">
              Las luchas de los 80 dejaron una gran cantidad de personajes
              históricos que marcaron un legado a seguir tan importante en
              nuestro TEC.
              <br />
              Cada una de las personas que alzaron su voz lograron mejoras para
              la institución en distintas áreas, tales como los servicios del
              Restaurante Institucional, el transporte público, la
              democratización del TEC, la REPRESENTACIÓN ESTUDIANTIL, los
              reconocimientos de los títulos profesionales, la creación de
              residencias estudiantiles y becas estudiantiles, entre otras.
              <br />
              Por esta razón, la FEITEC conmemora cada uno de los logros que
              marcaron un antes y un después en la historia de la educación
              superior pública de nuestro país, siendo la lucha de los 80’s una
              de las que ha causado gran impacto y trascendencia para
              Latinoamérica y el mundo.
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto" xl="10" lg="10" md="10" sm="12" ls="12">
            <ul className="timeline">
              {data.allStrapiEventohistorico.edges.map(document => (
                <EventoHistorico evento={document.node} />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export default Timeline

export const pageQuery = graphql`
  query timelineQuery {
    allStrapiEventohistorico(sort: { fields: fecha, order: DESC }) {
      edges {
        node {
          id
          nombre
          fecha
          descripcion
          imagen {
            id
            publicURL
          }
        }
      }
    }
  }
`
