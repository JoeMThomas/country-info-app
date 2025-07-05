import React from 'react';

const Filter = ({setRegionFilter}) => {
    return (
        <div className="grid grid-cols-4 h-10 bg-sky-500 px-5">
            <div className="flex items-center gap-3">
                Asia<input className="lg:scale-130" type="radio" name="region" onChange={() => setRegionFilter("Asia")}/>
            </div>
            <div className="flex items-center gap-3">
                Africa<input className="lg:scale-130" type="radio" name="region" onChange={() => setRegionFilter("Africa")}/>
            </div>
            <div className="flex items-center gap-3">
                Europe<input className="lg:scale-130" type="radio" name="region" onChange={() => setRegionFilter("Europe")}/>
            </div>
            <div className="flex items-center gap-3">
                Americas<input className="lg:scale-130" type="radio" name="region" onChange={() => setRegionFilter("Americas")}/>
            </div>
        </div>
    );
};

export default Filter;