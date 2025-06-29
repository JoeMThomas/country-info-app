import { useState } from 'react'
import './App.css'
import Search from "./components/Search.jsx";
import Card from "./components/CountryCard.jsx";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
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
        <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </main>
    )
}

export default App
