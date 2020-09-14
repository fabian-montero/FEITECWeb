import React from "react";
import {Row, Col} from 'reactstrap';

const Title = ({text}) =>{
    return(
    <Col style={{marginLeft:"40px"}}>
        <Row>
        <div style={{backgroundColor : "#75B1E1" , minWidth:"0.6rem",maxHeight:"2.2rem"}}/>
        <Col>
          <h2>{text}</h2>
        </Col>
    </Row>
    </Col>
    )
}

export default Title;