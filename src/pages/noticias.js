import React from "react"
import Noticia from "../components/noticias/noticia"
import ListaNoticias from "../components/Items/noticias/ListaNoticias"
import { STRAPI_URL } from "../config/strapiConfig"
import Strapi from "strapi-sdk-javascript"
import Layout from "../components/layout/layout"
import { Col } from "reactstrap"
import { runInThisContext } from "vm"

const strapi = new Strapi(STRAPI_URL)

class Noticias extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noticias: [],
      start: 0,
      limit: 6,
      selected: -1,
      index: 0,
    }
    this.goBack = this.goBack.bind(this)
    this.selectItem = this.selectItem.bind(this)
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

  goBack = () => {
    this.setState({ selected: -1 })
  }

  selectItem = id => {
    this.setState({ selected: id })
  }

  next = () => {
    this.setState({
      selected: (this.state.selected + 1) % this.state.noticias.length,
    })
  }

  prev = () => {
    let pos = (this.state.selected - 1) % this.state.noticias.length
    this.setState({
      selected: pos < 0 ? this.state.noticias.length - 1 : pos,
    })
  }

  async componentDidMount() {
    const _noticias = await strapi.getEntries("noticias", {
      _start: 0,
      _limit: this.state.limit,
    })
    this.setState({ noticias: _noticias })
  }

  render() {
    console.log(this.state.selected)
    return (
      <Layout>
        <Col className="mx-auto" xl="10" lg="10" md="11" sm="11" xs="11">
          {this.state.selected !== -1 ? (
            <Noticia
              selected={this.state.noticias[this.state.selected]}
              next={this.next}
              prev={this.prev}
              onClick={this.goBack}
              index={false}
            />
          ) : (
            <ListaNoticias
              noticias={this.state.noticias}
              onClick={this.selectItem}
            />
          )}
        </Col>
      </Layout>
    )
  }
}

export default Noticias
