import React from 'react';

function SearchName({ searchName }) {
    return (
        <div>
            <input
                type="text"
                name="name-crypto"
                placeholder="Enter name Crypto"
                onChange={searchName}
            />
        </div>
    );
}

export default SearchName;