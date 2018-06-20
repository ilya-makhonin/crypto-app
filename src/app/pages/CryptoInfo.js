import React from 'react';
import { Link } from 'react-router-dom';

function CryptoInfo({ data, match }) {
    let result = null;
    data.forEach(item => {
        if (item.id === Number(match.params.crname)) {
            const { id, name, symbol, quotes: { USD }} = item;
            result = (
                <div className="crypto_full">
                    <img
                        src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${id}.png`}
                        alt={`${name} picture`}
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
    });

    return result;
}

export default CryptoInfo;