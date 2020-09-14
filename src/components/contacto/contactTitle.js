import React , {Fragment} from "react"
import {Col,Container} from "reactstrap"
import { Link } from "gatsby"
import {Animated} from "react-animated-css";

const LARGE = 2;
const MEDIUM = 2;
const SMALL = 4;
const EXTRASMALL = 4;

const ContactTittle = ({contactGroup}) => (

  <Col lg="2" xl="2" md="2" sm="3" xs="3" style={{backgroundColor:"#F5F5F5",borderRadius:"5px", fontSize:"small"}} className="mx-5 my-3 shake">
      <p>{contactGroup.nombre}</p> 
      <Link to = {`/${contactGroup.id}`}>
        <button className="my-3 float-right" style={{backgroundColor:"#00ADE9",borderRadius:"10px",borderStyle:"none"}}>ver contactos</button>
      </Link>  
  </Col>

)
//<DirectorioLine contact={contact}/>
export default ContactTittle
