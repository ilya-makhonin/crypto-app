import React from 'react';
import { Link } from 'react-router-dom';

function CryptoItem({ id, name, symbol, quotes, imageSize }) {
    return (
        <Link to={`/${id}`}>
            <div className="crypto_item">
                <img
                    src={`https://s2.coinmarketcap.com/static/img/coins/${imageSize}/${id}.png`}
                    alt={`${name} picture`}
                />
                <p className="crypto_item_name">{name}</p>
                <p className="crypto_item_symbol">{symbol}</p>
                <p className="crypto_item_price">{quotes.USD.price} $</p>
            </div>
        </Link>
    );
}

export default CryptoItem;