import React from 'react';

import SearchName from './SearchName';
import FilterPrice from './FilterPrice';

function Search({ data, isFetching, searchName, filterPrice }) {
    return (
        isFetching
            ?
            <div>Loading</div>
            :
            <section className="search_section">
                <SearchName searchName={searchName}/>
                <FilterPrice data={data} filterPrice={filterPrice}/>
            </section>
    );
}

export default Search;