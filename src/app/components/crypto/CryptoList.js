import React from 'react';
import CryptoItem from './CryptoItem';


function CryptoList({ data, isFetching }) {
    return (
        <section className="crypto_list">
            {
                isFetching
                    ?
                    <div className="loading_moment">Loading...</div>
                    :
                    data.length
                        ?
                        data.map((item, index) => {
                            return <CryptoItem key={index + 'cpt'} imageSize="64x64" {...item} />;
                        })
                        :
                        <div>Нечего не найдено</div>
            }
        </section>
    );
}


export default CryptoList;