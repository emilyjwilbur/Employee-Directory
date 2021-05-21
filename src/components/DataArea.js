import React, { Component } from 'react';



export default class DataArea extends Component {

    state = {
        users:[{}],
        order: "descend",
        filteredUsers: [{}]
    }


    headings = [
        {name: "Image", width: "10%"},
        {name: "Name", width: "10%"},
        {name: "Phone", width: "20%"},
        {name: "Email", width: "20%"},
        {name: "DOB", width: "10"}

    ]


    handleSort = heading => {
        if(this.state.order === "descend") {
            this.setState({
                order:"ascend"
            })
        }else {
            this.setState({
                order: "descend"
            })
        }


        const compareFnc = (a, b) => {
            if (this.state.order === "ascend") {
                if (a[heading] === undefined) {
                    return 1;
                }else if (b[heading] === undefined) {
                    return -1;
                }

                else if (heading === "name") {
                    return a[heading].first.localCompare(b[heading].first);
                } else {
                    return a[heading] - b[heading];
                }
            }
        }


        const 
    }

}