import React from "react"
import Evento from "../components/evento/evento"
import Strapi from "strapi-sdk-javascript"
import { STRAPI_URL } from "../config/strapiConfig"
import Layout from "../components/layout/layout"
import { Col } from "reactstrap"

const strapi = new Strapi(STRAPI_URL)

class Eventos extends React.Component {
  constructor(props) {
    super(props)
    this.showMore = this.showMore.bind(this)
    this.state = {
      eventos: [],
      start: 0,
      limit: 5,
    }
  }

  showMore = async () => {
    await this.setState({ start: this.state.start + this.state.limit })
    try {
      const _eventos = await strapi.getEntries("eventos", {
        _start: this.state.start,
        _limit: this.state.limit,
      })
      const todos = this.state.eventos.concat(_eventos)
      this.setState({ eventos: todos })
    } catch (err) {
      alert(err)
    }
  }

  async componentDidMount() {
    try {
      const eventos = await strapi.getEntries("eventos", {
        _start: 0,
        _limit: this.state.limit,
      })
      this.setState({ eventos })
    } catch (err) {
      alert(err)
    }
  }

  render() {
    return (
      <Layout>
        <Col className="mx-auto" xl="10" lg="10" md="11" sm="12" xs="12">
          {this.state.eventos.map((doc, index) => {
            return <Evento data={doc} key={index} />
          })}
          <button onClick={this.showMore}>Mostrar 5 más</button>
        </Col>
      </Layout>
    )
  }
}
export default Eventos
