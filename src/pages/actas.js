import React from "react"
import Acta from "../components/acta/acta"
import { STRAPI_URL } from "../config/strapiConfig"
import Strapi from "strapi-sdk-javascript"
import Layout from "../components/layout/layout"
import { Row, Col } from "reactstrap"

const strapi = new Strapi(STRAPI_URL)

class Actas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      actas: [],
      start: 0,
      limit: 6,
      total: NaN,
    }
    this.loadMore = this.loadMore.bind(this)
  }

  async componentWillMount() {
    const total = await strapi.getEntryCount("actas")
    this.setState({ total: total })
    await this.loadMore()
  }

  async loadMore() {
    const _actas = await strapi.getEntries("actas", {
      _start: this.state.start,
      _limit: this.state.limit,
    })

    var allActas = this.state.actas.concat(_actas)

    this.setState({
      actas: allActas,
      start: this.state.start + this.state.limit,
    })
  }

  render() {
    return (
      <Layout>
        <Col className="mx-auto" xl="10" lg="10" md="11" sm="12" xs="12">
          <Row>
            <div
              style={{
                backgroundColor: "#9BC434",
                minWidth: "0.6rem",
                maxHeight: "2.2rem",
              }}
            />
            <Col>
              <h2>Actas</h2>
            </Col>
          </Row>
          {this.state.actas.map((acta, index) => (
            <Acta data={acta} key={index} />
          ))}
          {this.state.start < this.state.limit && (
            <button onClick={this.loadMore}>Cargar Mas</button>
          )}
        </Col>
      </Layout>
    )
  }
}

export default Actas
