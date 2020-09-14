import React from "react"
import Presupuesto from "../components/presupuesto/presupuesto"
import { STRAPI_URL } from "../config/strapiConfig"
import Strapi from "strapi-sdk-javascript"
import Layout from "../components/layout/layout"
import { Row, Col } from "reactstrap"

const strapi = new Strapi(STRAPI_URL)

class Presupuestos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      presupuestos: [],
      start: 0,
      limit: 6,
      total: NaN,
    }
    this.loadMore = this.loadMore.bind(this)
  }

  async componentWillMount() {
    const total = await strapi.getEntryCount("presupuestos")
    this.setState({ total: total })
    await this.loadMore()
  }

  async loadMore() {
    const _presupuestos = await strapi.getEntries("presupuestos")
    var allPresupuestos = this.state.presupuestos.concat(_presupuestos)
    this.setState({
      presupuestos: allPresupuestos,
    })
  }

  render() {
    return (
      <Layout>
        <Col className="mx-auto" xl="10" lg="10" md="11" sm="11" xs="11">
          <Row>
            <div
              style={{
                backgroundColor: "#75B1E1",
                minWidth: "0.6rem",
                maxHeight: "2.2rem",
              }}
            />
            <Col>
              <h2>Presupuestos</h2>
            </Col>
          </Row>
          <Presupuesto data={this.state.presupuestos} />
        </Col>
      </Layout>
    )
  }
}

export default Presupuestos
