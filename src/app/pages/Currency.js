import React from 'react';
import RatesItem from './../components/exchangeRates/RatesItem';
import { Link } from 'react-router-dom';

function Currency({ data, isFetching }) {
    let ratesArray = [];
    for (let prop in data) {
        ratesArray.push(data[prop]);
    }

    return (
        <div className="currency_full_list">
            {
                isFetching
                    ?
                    <div>Loading...</div>
                    :
                    ratesArray.map((item, index) => {
                        return <RatesItem key={index + 'ratFull'} {...item}/>;
                    })
            }
            <Link to="/">Home</Link>
        </div>
    );
}

export default Currency;