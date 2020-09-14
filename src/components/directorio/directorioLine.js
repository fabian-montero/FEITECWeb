import React , {Fragment}from "react"
import { Row , Col} from "reactstrap"


const DirectorioLine = (props) => {

  //console.log(props.contact.node);
  var contact = props.contact;

return(
  <Fragment>
    <td scope="row">{contact.siglas }</td>
    <td>{contact.correo}</td>
    <td>{contact.telefono}</td>
    <td>{contact.puesto}</td>
    <td>{typeof contact.sede == 'object'? contact.sede.nombre : "desconocida"} </td>
  </Fragment>
  )
}

export default DirectorioLine
