import React from "react";

const TransactionItem = ({date,description,category,amount}) => {
    return ( 
        <tr className="tablecontent">
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
        </tr>
     );
}
 
export default TransactionItem;