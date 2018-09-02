import React from 'react';

export default (props) => {
    console.log(props);
    return <div>Edit Expense
    <br/>
    <span>Lets edit item - {props.match.params.id}</span>
    </div>
};