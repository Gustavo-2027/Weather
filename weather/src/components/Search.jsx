import { useWeatherContext } from "../hooks/useWeatherContext";


export default function Search() {

    const {city, setCity} = useWeatherContext()

   function handleSearchCity(e) {
    e.preventDefault()
    if(city.trim() === "") {
        return <div>Procure uma cidade</div>
    }
   }

    return (
        <form className="w-full flex justify-center items-center pb-8 gap-3" onSubmit={(e => handleSearchCity(e))}>
            <input type="text" placeholder="Procure uma cidade" className="bg-gray-50 w-380 rounded-4xl h-12 indent-3 outline-0" onChange={(e => setCity(e.target.value))} value={city}/>
            <button className="rounded-3xl h-12 bg-gray-50 w-15">S</button>
            <button className="rounded-3xl h-12 bg-gray-50 w-15">L</button> 
        </form>
    )
}