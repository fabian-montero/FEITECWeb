import React from "react"

const DatePresupuesto = ({ date, text }) => {
  var dd = date.getDate()
  var mm = date.getMonth() + 1
  var yyyy = date.getFullYear()
  var preText = text ? text : ""
  return <p className="text-muted">{preText + dd + "/" + mm + "/" + yyyy}</p>
}

export default DatePresupuesto
