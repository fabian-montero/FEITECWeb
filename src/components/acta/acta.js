import React, {Fragment} from "react"
import {Row,Col,Media} from 'reactstrap';
import "./acta.css";
import DownloadIcon from "../../images/Icons/download.svg";
import { Link } from "gatsby"
import LightDate from "../date/lightDate";

const Acta = ({data}) => {
  var archivo = data.archivo;
  console.log({data});
  return(
  <Row className="componentBody"> 
    <Col xl ="1" lg="1" md="1" sm="1" xs="1">
      <a href={archivo.url} target="_blank" rel="noopener noreferrer">
        <Media src={DownloadIcon} style={{ minWidth: "2rem", maxHeight:"3rem"}}  />
      </a>
    </Col>
    <Col>
      <h4 className="tittleText">{data.nombre}</h4>
      <p  className="text-muted descriptionText">{data.descripcion}</p>
      <LightDate text="Publicado: " date={new Date(data.createdAt)}/>
    </Col>
  </Row>
  )
  }
  
  export default Acta;
