import React from 'react';
import CryptoItem from './../crypto/CryptoItem';

function TopPositions({ data, isFetching }) {
    let inputData = data;
    const newData = inputData.sort((a, b) => {
        return b.quotes.USD.percent_change_7d - a.quotes.USD.percent_change_7d;
    }).slice(0, 5);
    console.log('DATA > ', data, 'NEWDATA > ', newData);
    return (
        <div className="top_char">
            {
                isFetching
                    ? <div>Loading...</div>
                    : newData.map((item, index) => {
                        return <CryptoItem key={index + 'top'} imageSize="32x32" {...item} />;
                    })
            }
        </div>
    );
}

export default TopPositions;