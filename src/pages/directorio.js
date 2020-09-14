import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Item from "../components/Items/normativas/contenedorNorm"
import ContactTitle from "../components/contacto/contactTitle"
import {Col,Container,Row} from "reactstrap"



//<Img fluid={data.logo.childImageSharp} alt="" />
function DirectorioPage({ data }) {
  
  //console.log(data.allStrapiCategoriacontacto.edges);
  var groups = data ? data.allStrapiCategoriacontacto.edges : [];
  //map sede to its correspondint object


  //console.log(groups)
  return (
    <Layout>
      <SEO title="Feitec" />
      <div className="text-center">
        <h2 className="my-1">FEITEC</h2>
        <p className="my-1">telefono: 25509279</p>
        <p className="my-1">correo: correo@correo.com</p>
      </div>
      <Col className="mx-auto my-5" xl ="10" lg ="10" md = "11" sm = "12" xs="12" >
      <Row className="align-items-center justify-content-left " style={{minWidth:"100%"}}>
        {groups.map((document, index) => (
            <ContactTitle contactGroup={document.node} key={index} />

          ))}
      </Row>
      </Col>
    </Layout>
  )
}

export default DirectorioPage;

export const directorioQuery = graphql`
  query DirectorioQuery {
    allStrapiCategoriacontacto {
      edges {
        node {
          id
          nombre
          
        }
      }
    }
  }
    `