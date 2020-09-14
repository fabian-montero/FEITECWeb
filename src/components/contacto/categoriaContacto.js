import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout";
import { Col } from "reactstrap"
import Directorio from "../directorio/directorio"



const CategoriaContacto = ({data}) => {
  var contacts = data.strapiCategoriacontacto.directorios;
  var sed = data.sed.edges;
  console.log({sed})
  //console.log(contacts)
  sed.forEach(node =>
    {
        var sede = node.node;
        contacts.forEach(element => {
            if(sede.id.includes(element.sede)) element.sede = sede
            console.log(element)
        });
    }
  );
  return(
  <Layout>
    <Col className="mx-auto" xl ="10" lg ="10" md = "11" sm = "12" xs="12" >
      <Directorio contactList = {data.strapiCategoriacontacto.directorios}/>
    </Col>
  </Layout>
  )
}

export default CategoriaContacto;

export const query = graphql`
  query CategoryContactTemplate($id: String!) {
    strapiCategoriacontacto (id: {eq: $id}){
        id
        nombre
        directorios {
            id
            siglas
            nombre
            telefono
            correo
            puesto
            sede
        }
    }
    sed :  allStrapiSede {
        edges {
          node {
            id
            nombre
          }
        }
    }
  }
`