import React from 'react';



const Card = ({country: {name, region, population, capital, languages, currencies, flags}}) => {
    return (
        <div className="bg-[#F2F8FF] max-w-70 min-w-60 p-5 rounded-2xl text-[#123A67] border-5 border-[#2563EB]">
            <img className="h-35 rounded-lg w-full border-2 border-[#123A67]" src={flags.png} alt={name} />
            <div className="mt-3 space-y-1 text-left">
                <h3 className="text-xl">{name.common}</h3>
                <div className="flex flex-row items-center gap-2">
                    <img src="marker-icon.svg" alt="marker-icon" />
                    <p className="float-left">Continent - {region}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src="person-icon.svg" alt="marker-icon" />
                    <p className="float-left">Population - {population
                        ? population > 1_000_000
                            ? `${(population / 1_000_000).toFixed(1)}M`
                            : population.toLocaleString()
                        : "N/A"}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src="building-icon.svg" alt="marker-icon" />
                    <p className="float-left">Capital City - {capital}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src="language-icon.svg" alt="marker-icon" />
                    <p className="float-left">Languages - {languages ? Object.values(languages).join(", ") : "N/A"}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src="currency-icon.svg" alt="marker-icon" />
                    <p className="float-left">Currency - {currencies ? Object.keys(currencies).join(", ") : "N/A"}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;