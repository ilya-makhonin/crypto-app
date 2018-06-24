import React from 'react';

function FilterPrice({ data, filterPrice }) {
    let rangeValue = data.slice();
    rangeValue.sort((first, second) => {
        return second.quotes.USD.price - first.quotes.USD.price
    });

    const max = Math.ceil(rangeValue[0].quotes.USD.price);

    return (
        <div>
            <input
                type="text"
                name="min-price"
                placeholder="Enter min price"
                onChange={filterPrice}
            />
            <input
                type="text"
                name="max-price"
                placeholder={`Max price: ${max}$ - ${rangeValue[0].name}`}
                onChange={filterPrice}
            />
        </div>
    );
}

export default FilterPrice;