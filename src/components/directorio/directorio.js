import React , {Fragment} from "react"
import {Table} from "reactstrap"
import DirectorioLine from "./directorioLine"
import "./directorio.css";

const LARGE = 2;
const MEDIUM = 2;
const SMALL = 4;
const EXTRASMALL = 4;

const Directorio = ({contactList}) => (
  
  <Table size="sm" responsive>
     <thead className="tableHead " style={{backgroundColor:"#CFCFCF",color:"black"}}>
       <tr>
          <th>Siglas</th>
          <th>Correo Electronico</th>
          <th>Telefono</th>
          <th>Puesto</th>
          <th>Sede</th>
       </tr>
     </thead>
     <tbody>
    {contactList.map((contact, index) => (
        <tr className={"tabeline light"} key = {index}>
          <DirectorioLine contact={contact}/>
        </tr>
    )
    )
    }
    </tbody>
  </Table>
)
//<DirectorioLine contact={contact}/>
export default Directorio
