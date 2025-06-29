import React from 'react';

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="w-full bg-[#629AF6] px-2 py-2  mt-10 rounded-3xl max-w-3xl mx-auto">
            <div className="relative flex items-center h-10">
                <img className="absolute right-3 h-5 w-5" src="search-icon.svg" alt="Search"/>
                <input
                    type="text"
                    placeholder="Search Countries"
                    className="w-full pl-4 pr-10 py-2 bg-transparent text-white placeholder-white/70 outline-none"
                    value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>
        </div>
    )
}

export default Search;