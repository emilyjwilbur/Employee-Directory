import React from 'react';

function DataBody({ users }) {

    function formatDate(date) {
const dateArray = date.split("-");
const year = dateArray[0];
const month = dateArray[1];
const dayArray = date[1].split("-");
const day = dayArray[0];
const formattedDate = [month, day, year].join["-"];
return formattedDate;
    }




return (

    <tbody>

works

    </tbody>


)

}


export default DataBody;