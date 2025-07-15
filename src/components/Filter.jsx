import React from 'react';
import FilterOption from "./FilterOption.jsx";

const Filter = ({regionFilter, setRegionFilter, setSortOrder, setSortAlpha, toggleFilter}) => {
    const regions = ["Asia", "Africa", "Americas", "Europe", "Oceana"];
    return (
        <div>
            <div className="grid grid-cols-5 w-150 h-10 bg-sky-500">
                {/* Render every region filter */}
                {regions.map(region => (
                    <FilterOption
                        optionName={region}
                        toggleFilter={toggleFilter}
                        filterList={regionFilter}
                        setFilterList={setRegionFilter}
                    />
                ))}
            </div>

            <div className="">
                Sort by
                <div className="flex flex-row items-center gap-3">
                    <div className="flex items-center gap-2 w-max">
                        Population [low-high] <input className="lg:scale-130" type="radio" name="sort" onChange={() => setSortOrder("asc")}/>
                    </div>
                    <div className="flex items-center gap-2 w-max">
                        Population [high-low] <input className="lg:scale-130"  type="radio" name="sort" onChange={() => setSortOrder("desc")}/>
                    </div>
                    <div className="flex items-center gap-2 w-max">
                        Name [A-Z]<input className="lg:scale-130"  type="radio" name="sort" onChange={() => {setSortAlpha(true); setSortOrder("");}}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Filter;