import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/oneCrypto.sass';


function CryptoInfo({ data, match }) {
    return data.map((item, index) => {
        if (item.id === Number(match.params.crname)) {
            const { id, name, symbol, quotes: { USD }} = item;

            return (
                <div className="crypto_full" key={'select' + index}>
                    <img
                        src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${id}.png`}
                        alt={`${name}`}
                    />
                    <p>{ name }</p>
                    <p>{ symbol }</p>
                    <p>{ USD.price } $</p>
                    <p>{ USD.percent_change_1h } %</p>
                    <p>{ USD.percent_change_7d } %</p>
                    <p>{ USD.percent_change_24h } %</p>
                    <p>{ USD.market_cap } $</p>
                    <Link to="/">Home</Link>
                </div>
            );
        }

        return null;
    });
}


export default CryptoInfo;