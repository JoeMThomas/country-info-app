import React from 'react';

const Card = () => {
    return (
        <div className="bg-[#F2F8FF] p-5 rounded-2xl text-[#123A67] border-2 border-[#2563EB]">
            <img className="h-auto rounded-lg w-full" src="/no-image.png" />
            <div className="mt-3 space-y-1 text-left">
                <h3 className="text-lg">USA</h3>
                <div className="flex flex-row items-center gap-2">
                    <img src="marker-icon.svg" alt="marker-icon" />
                    <p className="float-left">Continent - North America</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src="person-icon.svg" alt="marker-icon" />
                    <p className="float-left">Population - 340.1m</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src="building-icon.svg" alt="marker-icon" />
                    <p className="float-left">Capital City - Washington D.C.</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src="language-icon.svg" alt="marker-icon" />
                    <p className="float-left">Language - English</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src="currency-icon.svg" alt="marker-icon" />
                    <p className="float-left">Currency - US Dollar</p>
                </div>

            </div>

        </div>
    )
}

export default Card;