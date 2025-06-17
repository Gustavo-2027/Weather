import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <div className="bg-gradient-to-b from-zinc-900 to-blue-800 w-full min-h-dvh px-10 py-5">
         
            <Outlet/>
         
        </div>
    )
}