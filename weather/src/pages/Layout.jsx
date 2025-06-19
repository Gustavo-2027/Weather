import { Outlet } from "react-router-dom";
import { useWeatherContext } from "../hooks/useWeatherContext";

export default function Layout() {

    const {horario} = useWeatherContext()

    return (
        <div className={`w-full min-h-dvh px-10 py-5 ${horario == "Noite" && "bg-gradient-to-b from-zinc-900 to-blue-800 "}` }>
         
            <Outlet/>
         
        </div>
    )
}