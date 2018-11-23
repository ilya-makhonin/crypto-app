import React from 'react';

function SearchName({ searchName }) {
    return (
        <div className="search_name">
            <input
                id="searchName"
                type="text"
                name="name-crypto"
                placeholder="Enter name Crypto"
                onChange={searchName}
            />
        </div>
    );
}

export default SearchName;