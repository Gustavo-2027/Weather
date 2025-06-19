import { createContext } from "react";
import { useState, useEffect } from "react";
import { getWeather } from "../services/Service";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Natal");
  const [horario, setHorario] = useState("");

  const timestamp = data.dt;
  const date = new Date(timestamp * 1000);
  const hora = date.getHours();

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
    
    if (hora >= 7 && hora < 12) {
      setHorario("Dia");
    } else if (hora >= 12 && hora < 18) {
      setHorario("Tarde");
    } else {
      setHorario("Noite");
    }
  }, [city]);

  return (
    <WeatherContext.Provider value={{ data, setData, city, setCity, horario }}>
      {children}
    </WeatherContext.Provider>
  );
}
