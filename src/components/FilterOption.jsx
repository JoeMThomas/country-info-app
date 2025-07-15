import React from 'react';

const FilterOption = ({optionName, filterList, setFilterList, toggleFilter}) => {
    return (
        <div className="flex items-center gap-3">
            {optionName}<input className="lg:scale-130 mt-1" type="checkbox" onChange={() => toggleFilter({
            filterList: filterList, setFilterList: setFilterList, filter: optionName })} />
        </div>
    );
};

export default FilterOption;