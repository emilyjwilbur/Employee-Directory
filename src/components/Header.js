import React, { Component } from "react";


export default class Header extends Component {
    render(){
        return (
            <div className="header" style={{ backgroundColor: "#9daaa2", width: "auto", height: "150px", padding:"30px", textAlign: "center", color:"white", fontFamily:"helvetica"}}>
                <h1 style={{ fontSize: "45px" }}>Employee Directory</h1>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>Use the search box to narrow your results.</p>
            </div>
        )
    }
}