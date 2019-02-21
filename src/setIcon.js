export default function setIcon(e) {
  switch (e) {
    //Thunderstorms
    case "Thunderstorm with light rain":
      return "bolt";
    case "Thunderstorm with rain":
      return "bolt";
    case "Thunderstorm with heavy rain":
      return "bolt";
    case "Thunderstorm with light drizzle":
      return "bolt";
    case "Thunderstorm with drizzle":
      return "bolt";
    case "Thunderstorm with heavy drizzle":
      return "bolt";
    case "Thunderstorm with Hail":
      return "bolt";
    //Rain
    case "Light Drizzle":
      return "cloud-rain";
    case "Drizzle":
      return "cloud-rain";
    case "Heavy Drizzle":
      return "cloud-rain";
    case "Light rain":
      return "cloud-rain";
    case "Moderate Rain":
      return "cloud-rain";
    case "Heavy Rain":
      return "cloud-rain";
    case "Freezing rain":
      return "cloud-rain";
    case "Light shower rain":
      return "cloud-rain";
    case "Shower rain":
      return "cloud-rain";
    case "Heavy shower rain":
      return "cloud-rain";
    //Snow
    case "Light snow":
      return "snowflake";
    case "Snow":
      return "snowflake";
    case "Heavy Snow":
      return "snowflake";
    case "Mix snow/rain":
      return "snowflake";
    //wind
    case "Sleet":
      return "wind";
    case "Heavy sleet":
      return "wind";
    case "Snow shower":
      return "wind";
    case "Heavy snow shower	":
      return "wind";
    case "Flurries":
      return "wind";
    case "Mist":
      return "wind";
    case "Smoke":
      return "wind";
    case "Haze":
      return "wind";
    case "Sand/dust":
      return "wind";
    case "Fog":
      return "wind";
    case "Freezing Fog":
      return "wind";
    //clear sky
    case "Clear sky":
      return "sun";
    //misc
    case "Few clouds":
      return "cloud";
    case "Scattered clouds":
      return "cloud";
    case "Broken clouds":
      return "cloud";
    case "Overcast clouds":
      return "cloud";
    case "Unknown Precipitation":
      return "cloud";
    //
    default:
      return "sun";
    //
  }
}
