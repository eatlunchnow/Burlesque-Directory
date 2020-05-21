import React from "react"
import logo from "../img/bdlogo.png"

const logoStyle = {
    margin: '0px',
    padding: '10px',
    width: '150px',
  };

function Logo() {
    return(
        <img src={logo} style={logoStyle} className="logo" alt="Burlesque Directory Logo"></img>
    )
}

export default Logo