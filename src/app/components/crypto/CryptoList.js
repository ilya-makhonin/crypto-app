import React from 'react';
import CryptoItem from './CryptoItem';

function CryptoList({ data, isFetching }) {
    return (
        <div className="crypto_list">
            {
                isFetching
                    ? <div>Loading...</div>
                    : data.map((item, index) => {
                        return <CryptoItem key={index + 'cpt'} imageSize="64x64" {...item} />;
                    })
            }
        </div>
    );
}

export default CryptoList;