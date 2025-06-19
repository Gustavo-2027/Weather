import { useWeatherContext } from "../../hooks/useWeatherContext";

export default function HeaderCity() {

  const { data } = useWeatherContext();

  const timestamp = data.dt;
  const date = new Date(timestamp * 1000);
  const hora = date.getHours();
  if(hora > 20) {
    console.log("Noite")
  }
  const minutos = date.getMinutes();

  const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const diaSemana = diasDaSemana[date.getDay()];

  return (
    <header className="w-full flex justify-between">
      <div className="hover:scale-110 duration-700">
        <div className="flex gap-5 items-center text-lg">
          <h1 className="text-2xl font-semibold">
            {data.name}, {data.sys.country}
          </h1>
          <p className="text-zinc-700">
            {diaSemana},
            <span className="pl-1">
              {hora}:{minutos}
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="imagem do clima atual"
            className="w-35"
          />
          <h1 className="text-zinc-700">
            <span className="text-9xl font-light text-black">
              {data.main.temp.toFixed(0).slice(0, 2)}
            </span>
            <span className="zinc-400 text-md font-normal">°C</span>
          </h1>
        </div>
      </div>

      <div className="text-end">
        <p>ST: {data.main.feels_like}</p>
        <p>hPa: {data.main.pressure}</p>
        <p>UR: {data.main.humidity}%</p>
      </div>
    </header>
  );
}
