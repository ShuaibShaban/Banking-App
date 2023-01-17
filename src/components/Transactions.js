import React from "react";
import TransactionItem from "./TransactionItem";

const Transactions = ({transactions}) => {
    return ( 
        <table>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            {/* {transaction items} */}
            {transactions.map(trans=>{
                return <TransactionItem
                date={trans.date}
                description={trans.description}
                category={trans.category}
                amount={trans.amount}
                key={trans.id}
                Category={transactions.category}
                />
            })}
        </table>
     );
}
 
export default Transactions;