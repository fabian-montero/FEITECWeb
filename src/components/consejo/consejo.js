import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout";
import { Card, CardHeader, CardBody } from "reactstrap"

const Consejo = ({data}) => {
  var consejo = data.strapiConsejo;
  return(
  <Layout>
    <Card>
      <CardHeader>
      <h1>{consejo.nombre }</h1>
      </CardHeader>
      <CardBody>
      <p>descripcion consejo</p>
      </CardBody>
    </Card>
  </Layout>
  )
}

export default Consejo;

export const query = graphql`
  query ConsejoTemplate($id: String!) {
    strapiConsejo(id: {eq: $id}) {
      nombre
      id
    }
  }
`