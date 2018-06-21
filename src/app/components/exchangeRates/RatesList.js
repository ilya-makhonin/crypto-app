import React from 'react';

import RatesItem from './RatesItem';

function RatesList({ data, isFetching }) {
    let ratesArray = [];
    for (let prop in data) {
        ratesArray.push(data[prop]);
    }

    return (
        <div className="exchange">
            {
                isFetching
                    ? <div>Loading...</div>
                    : ratesArray.map((item, index) => {
                        return <RatesItem key={index + 'rat'} {...item}/>;
                    })
            }
        </div>
    );
}

export default RatesList;