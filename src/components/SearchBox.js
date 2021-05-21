import React from "react";


function SearchBox({ handleSearchChange }){
    return (
        <div className="search-box col-6" style={{ padding: 15, textAlign: "center" }} >
            <form className="form-inline">
                <input className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e=> handleSearchChange(e)}
                />
            </form>
        </div>
    );
}

export default SearchBox;