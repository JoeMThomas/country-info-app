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
    const [regionFilter, setRegionFilter] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [sortAlpha, setSortAlpha] = useState(false);


    const fetchCountries = async () => {
        try {
            setIsLoading(true);
            setErrorMessage("");
            const endpoint = `${API_BASE_URL}/all?fields=name,region,population,capital,languages,currency,flags,currencies`;
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
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) && (regionFilter.length > 0 ? regionFilter.includes(country.region) : true)).sort((a,b) => {
            if (sortOrder === "asc") {
                return a.population - b.population;
            } else if (sortOrder === "desc") {
                return b.population - a.population;
            } else if (sortAlpha) {
                return a.name.common.localeCompare(b.name.common);
            }
            });

    // Adds a filter to its list if not present and removes if present
    const toggleFilter = ({filterList, setFilterList, filter}) => {
        if (filterList.includes(filter)) {
            setFilterList(filterList.filter(a => a !== filter));
        } else {
            setFilterList([...filterList, filter]);
        }
    }

    useEffect( () => {
        fetchCountries();
    }, []);

    return (
      <main>
        <div className="w-full h-[400px] bg-[url('/flag-banner.png')] bg-center bg-cover bg-no-repeat" />

        <div className="flex-col justify-center px-10">
            <h1 className="mt-4 text-6xl text-[#1E3A8A]">Find facts about countries</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
        <div className="w-full mt-8">
            <h1 className="text-2xl text-[#1E3A8A]">All Countries</h1>
        </div>
        <div className="mt-5 text-left bg-[#1E3A8A] text-white text-lg">
            <h1 className="text-2xl">Filters</h1>
            <Filter regionFilter={regionFilter} setRegionFilter={setRegionFilter} setSortOrder={setSortOrder} setSortAlpha={setSortAlpha} toggleFilter={toggleFilter}/>
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
