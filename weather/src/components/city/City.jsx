import { useWeatherContext } from "../../hooks/useWeatherContext";
import HeaderCity from "./HeaderCity";
import MainCity from "./MainCity";

export default function City() {
  const { data } = useWeatherContext();
  console.log(data.main);

  if (!data || !data.main) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-50 rounded-4xl w-400 h-250 p-10 py-10">
        <HeaderCity />
        <hr />
        <MainCity />
      </div>
    </div>
  );
}
