import React from 'react';
import { Link } from 'react-router-dom';

import RatesItem from './RatesItem';

function RatesList({ data, isFetching }) {
    let ratesArray = [];
    for (let prop in data) {
        if (prop === 'EUR' || prop === 'USD' || prop === 'CAD') {
            ratesArray.push(data[prop]);
        }
    }

    return (
        <section className="exchange">
            <div className="exchange_full_list">
                <Link to="/fullCurrency">Посмотреть список основных валют</Link>
            </div>
            <div className="exchange_list">
                {
                    isFetching
                        ?
                        <div>Loading...</div>
                        :
                        ratesArray.map((item, index) => {
                            return <RatesItem key={index + 'rat'} {...item}/>;
                        })
                }
            </div>
        </section>
    );
}

export default RatesList;