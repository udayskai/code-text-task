import React from "react";


// function based component only uses props data
const InfoPage = (props) => {

  return (
    <div className="" style={{ border: "2px solid black", marginTop: "110px" }}>
      <h4>Infopage</h4>
      <h1>{props.props}</h1>
    </div>
  );
}


export default InfoPage;