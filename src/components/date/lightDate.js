import React from "react";
import "./lightDate.css"

const LightDate = ({date, text}) => {
    var dd = date.getDate(); 
    var mm = date.getMonth() + 1; 
    var yyyy = date.getFullYear();
    var preText = text ? text: "";  
    return(
      <p className="lightDateText">{preText+dd+"/"+mm+"/"+yyyy}</p>
    )
  }
  
  export default LightDate;