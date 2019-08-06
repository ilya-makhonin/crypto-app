import React from 'react';


function RatesItem({ CharCode, Name, Value }) {
    return (
        <div className="money_item">
            <p className="money_item_char">{CharCode}</p>
            <p className="money_item_name">{Name}</p>
            <p className="money_item_price">{Value} Rub</p>
        </div>
    );
}


export default RatesItem;