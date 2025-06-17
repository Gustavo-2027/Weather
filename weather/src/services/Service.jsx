const myKey = "e479c7870d6c61dbe690bd1970337536";

export async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}&units=metric&lang=pt_br`;

  const response = await fetch(url);
  const json = await response.json();

  return json
  
}
