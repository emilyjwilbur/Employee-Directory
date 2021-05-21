import React, { Component } from "react";


export default class Header extends Component {
    render(){
        return (
            <div className="header" style={{ backgroundColor: "#9daaa2", width: "auto", height: "100px", padding:"10px", textAlign: "center", color:"white"}}>
                <h1>Employee Directory</h1>
                <p>Use the search box to narrow your results.</p>
            </div>
        )
    }
}