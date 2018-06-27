import React from 'react';

function FilterPrice({ data, filterPrice }) {
    let rangeValue = data.slice();
    rangeValue.sort((first, second) => {
        return second.quotes.USD.price - first.quotes.USD.price
    });

    const max = Math.ceil(rangeValue[0].quotes.USD.price);

    return (
        <div className="search_price">
            <input
                id="searchPriceMin"
                type="text"
                name="min-price"
                placeholder="Enter min price"
                onChange={filterPrice}
            />
            <input
                id="searchPriceMax"
                type="text"
                name="max-price"
                placeholder={`Max price: ${max}$ - ${rangeValue[0].name}`}
                onChange={filterPrice}
            />
        </div>
    );
}

export default FilterPrice;