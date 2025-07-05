import {useEffect, useState} from 'react'
import './App.css'
import Search from "./components/Search.jsx";
import Card from "./components/CountryCard.jsx";
import Spinner from "./components/Spinner.jsx";
import Filter from "./components/Filter.jsx";

const API_BASE_URL = "https://restcountries.com/v3.1";

const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json"
    }
}

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [countryList, setCountryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [regionFilter, setRegionFilter] = useState("");


    const fetchCountries = async () => {
        try {
            setIsLoading(true);
            setErrorMessage("");
            const endpoint = regionFilter ? `${API_BASE_URL}/region/${regionFilter}` : `${API_BASE_URL}/all?fields=name,region,population,capital,languages,currency,flags,currencies`;
            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error("Failed to fetch countries");
            }

            const data = await response.json();
            setCountryList(data|| []);

        } catch (error) {
            console.error(`Error fetching countries: ${error}`);
            setErrorMessage("Error fetching countries, please try again later.");
        } finally {
            setIsLoading(false);
        }
    }

    const filteredCountries = countryList.filter(country =>
        country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect( () => {
        fetchCountries(searchTerm);
    }, [regionFilter]);

    return (
      <main>
        <div className="w-full h-[400px] bg-[url('/flag-banner.png')] bg-center bg-cover bg-no-repeat">

        </div>
        <div className="flex-col justify-center px-10">
            <h1 className="mt-4 text-6xl text-[#1E3A8A]">Find facts about countries</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
        <div className="w-full mt-8">
            <h1 className="text-2xl text-[#1E3A8A]">All Countries</h1>
        </div>
        <div className="mt-5 text-left bg-[#1E3A8A] text-white text-lg">
          Filters
            <Filter setRegionFilter={setRegionFilter}/>
        </div>
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {isLoading ? (
                <p><Spinner /></p>
            ) : errorMessage ? (
                <p className="text-red-600">{errorMessage}</p>
            ) : (
                filteredCountries.map((country) => (
                        <Card key={country.name} country={country} />
                ))
            )}
        </div>
      </main>
    )
}

export default App
