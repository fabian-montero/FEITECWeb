import React from "react"
import Layout from "../components/layout/layout"
import { Col } from "reactstrap"
import { graphql } from "gatsby"
import HorarioContainer from "../components/horarioDeBuses/horarioContainer"

const HorarioDeBuses = ({ data }) => (
  <Layout>
    <Col className="mx-auto" xl="10" lg="10" md="11" sm="11" xs="11">
      <HorarioContainer routes={data.allStrapiRutabuses.edges} />
    </Col>
  </Layout>
)
export default HorarioDeBuses

export const HorarioDeBusesQuery = graphql`
  query MyQuery {
    allStrapiRutabuses {
      edges {
        node {
          horariosSalida
          nombreRuta
          infoExtra
          strapiId
        }
      }
    }
  }
`
