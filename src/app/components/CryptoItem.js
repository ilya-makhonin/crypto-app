import React from 'react';

function CryptoItem({ id, name, symbol, quotes: { USD: { price } } }) {
    return (
        <div className="money_item">
            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`} alt={`${name} picture`}/>
            <p className="money_item_name">{name}</p>
            <p className="money_item_symbol">{symbol}</p>
            <p className="money_item_price">{price} $</p>
        </div>
    );
}

export default CryptoItem;