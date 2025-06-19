import { useWeatherContext } from "../../hooks/useWeatherContext";

export default function MainCity() {
  const { data } = useWeatherContext();

  return (
    <div className="py-8 flex gap-2">
      <section className="flex flex-col justify-center items-center w-30">
        <h1 className="text-5xl font-semibold">{data.wind.speed}</h1>
        <p className="">m/s</p>
      </section>
      <div className="border-l-2 pl-5 text-zinc-500 border-zinc-500 flex flex-col justify-center text-lg">
        <p>
          Temperatura mínima:{" "}
          <span className="font-semibold text-zinc-600">
            {data.main.temp_min}°C
          </span>
        </p>
        <p>
          Temperatura máxima:{" "}
          <span className="font-semibold text-zinc-600">
            {data.main.temp_max}°C
          </span>
        </p>
      </div>
    </div>
  );
}
