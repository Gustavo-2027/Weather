import { createContext } from "react";
import { useState, useEffect } from "react";
import { getWeather } from "../services/Service";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Natal");

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await getWeather(city);
        setData(response);
      } catch (error) {
        console.log("Erro no fetchWeather: " + error);
      }
    }
    fetchWeather();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ data, setData, city, setCity }}>
      {children}
    </WeatherContext.Provider>
  );
}
