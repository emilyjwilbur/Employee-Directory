import React from "react";
import SearchBox from "./SearchBox.js";


function Nav({ handleNewSearch }) {
    return (
        <nav className = "navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row" >
                <SearchBox handleSearchChange={handleNewSearch}/>
            </div>
        </nav>
    );
}

export default Nav;