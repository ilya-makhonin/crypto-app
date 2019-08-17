import React from 'react';
import { Link } from 'react-router-dom';


function CryptoItem({ id, name, symbol, quotes, imageSize }) {
    return (
        <Link to={`/${id}`}>
            <div className="crypto_item">
                <img
                    src={`http://localhost:3000/api/icon/${imageSize}/${id}`}
                    alt={`${name}`}
                    className="crypto_item_icon"
                />
                <p className="crypto_item_name">{name}</p>
                <p className="crypto_item_symbol">{symbol}</p>
                <p className="crypto_item_price">{quotes.USD.price} $</p>
            </div>
        </Link>
    );
}


export default CryptoItem;