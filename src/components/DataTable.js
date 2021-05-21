  
import React from "react";
import DataBody from "./DataBody";


function DataTable({ headings, users, handleSort}) {
    return (
        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-hover table-condensed">
                    <thead class="hed">
                        <tr>
                            {headings.map(({ name, width }) => {
                                return (
                                    <th className="col"
                                        key={name}
                                        style={{ width }}
                                        onClick={() => {
                                            handleSort(name.toLowerCase());
                                        }}
                                        >
                                            {name}
                                            <span className="pointer"><i class="fas fa-sort"></i></span>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>

                <DataBody users={users} />
            </table>
        </div>
    );
}

export default DataTable;