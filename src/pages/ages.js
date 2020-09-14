import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
//import DeleteList from "../components/deleteList"

function Ages({data}) {
  return(
    <Layout>
      <SEO title="Feitec" />
      <ul>
        {data.allStrapiAge.edges.map(document => (
          <li key={document.node.id}>
            <Link to = {`/${document.node.id}`}>{document.node.nombre}</Link>
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default Ages


export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiAge {
      edges {
        node {
          id
          nombre
        }
      }
    }
  }
`