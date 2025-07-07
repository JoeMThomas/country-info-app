import React, {useEffect, useState} from 'react';

const Filter = ({regionFilter, setRegionFilter, setSortOrder, setSortAlpha, toggleFilter}) => {

    return (
        <div>
            <div className="grid grid-cols-5 w-140 h-10 bg-sky-500">
                <div className="flex items-center gap-3">
                    Asia<input className="lg:scale-130 mt-1" type="checkbox" name="region" onChange={() => toggleFilter({
                    filterList: regionFilter, setFilterList: setRegionFilter, filter: "Asia" })} />
                </div>
                <div className="flex items-center gap-3">
                    Africa<input className="lg:scale-130 mt-1" type="checkbox" name="region" onChange={() => toggleFilter({
                    filterList: regionFilter, setFilterList: setRegionFilter, filter: "Africa" })}/>
                </div>
                <div className="flex items-center gap-3">
                    Europe<input className="lg:scale-130 mt-1" type="checkbox" name="region" onChange={() => toggleFilter({
                    filterList: regionFilter, setFilterList: setRegionFilter, filter: "Europe" })}/>
                </div>
                <div className="flex items-center gap-3">
                    Americas<input className="lg:scale-130 mt-1" type="checkbox" name="region" onChange={() => toggleFilter({
                    filterList: regionFilter, setFilterList: setRegionFilter, filter: "Americas" })}/>
                </div>
                <div className="flex items-center gap-3">
                    Oceania<input className="lg:scale-130 mt-1" type="checkbox" name="region" onChange={() => toggleFilter({
                    filterList: regionFilter, setFilterList: setRegionFilter, filter: "Oceania" })}/>
                </div>
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