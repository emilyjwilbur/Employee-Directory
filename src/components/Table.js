import React from 'react';

function Table(props) {
    console.log(props);
    const userData = props.users.map((user) => {
        return <div>{user.name.first}</div>;
    });
    console.log(userData);
    return (
    <div className="container">
        {userData}
        </div>
    );
}


export default Table;

