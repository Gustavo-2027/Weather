import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export function useWeatherContext() {
    const context = useContext(WeatherContext)

    if(context) {
        console.log("True weather context")
    } else {
        console.log("Erro weather context!")
    }

    return context
}