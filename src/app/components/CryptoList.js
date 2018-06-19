import React from 'react';
import CryptoItem from './CryptoItem';

function CryptoList({ data }) {
    console.log(data);
    return (
        <div>
            {
                data.map((item, index) => {
                    return <CryptoItem key={index} {...item} />;
                })
            }
        </div>
    );
}

export default CryptoList;