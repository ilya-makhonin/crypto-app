import React from 'react';
import CryptoItem from './../crypto/CryptoItem';

function treatment( first, second ) {
    const firstParams = first.quotes.USD;
    const secondParams = second.quotes.USD;

    const firstChangePercent =
        firstParams.percent_change_1h +
        firstParams.percent_change_24h +
        firstParams.percent_change_7d;

    const secondChangePercent =
        secondParams.percent_change_1h +
        secondParams.percent_change_24h +
        secondParams.percent_change_7d;

    return secondChangePercent - firstChangePercent;
}

function TopPositions({ data, isFetching }) {
    const newArr = data.slice();
    const newData = newArr.sort((first, second) => {
        return treatment(first, second);
    }).slice(0, 5);

    return (
        <div className="top_char">
            {
                isFetching
                    ?
                    <div>Loading...</div>
                    :
                    newData.map((item, index) => {
                        return <CryptoItem key={index + 'top'} imageSize="32x32" {...item} />;
                    })
            }
        </div>
    );
}

export default TopPositions;