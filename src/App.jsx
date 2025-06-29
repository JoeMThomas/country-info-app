import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from "./components/Search.jsx";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <main>
        <div className="w-full h-[400px] bg-[url('/flag-banner.png')] bg-center bg-cover bg-no-repeat">

        </div>
        <div className="flex justify-center px-10">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
      </main>
    )
}

export default App
