import React from 'react';

function DataBody({ users }) {
// console.log("test")
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
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({ login, name, picture, phone, email, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Image" className="align-middle">
                                <img 
                                    src={picture.medium}
                                    alt={"profile image for " + name.first +  " " + name.last}
                                    className="img-responsive rounded"
                                />
                            </td>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone" className="align-middle">
                                {phone}
                            </td>
                            <td data-th="Email" className="align-middle">
                                <a href={"mailto:" + email} >
                                    {email}
                                </a>
                            </td>
                            <td data-th="DOB" className="align-middle">
                                {dob.date}
                            </td>
                        </tr>
                    );
                })
            ) : (
                <></>
            )}
        </tbody>
    );
}


export default DataBody;

   