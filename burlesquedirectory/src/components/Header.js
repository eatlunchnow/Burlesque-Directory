import React from "react"
import banner from "../img/bdbanner.png"


const bannerStyle = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative"
    
}

function Header(){
    return(
        <img src={banner} style={bannerStyle} className="logo" alt="Burlesque Directory Logo"></img>

    )
}

export default Header