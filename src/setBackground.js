export default function setBackground(e) {
  switch (e) {
    //Thunderstorms
    case "Thunderstorm with light rain":
      return "cloud-bg";
    case "Thunderstorm with rain":
      return "cloud-bg";
    case "Thunderstorm with heavy rain":
      return "cloud-bg";
    case "Thunderstorm with light drizzle":
      return "cloud-bg";
    case "Thunderstorm with drizzle":
      return "cloud-bg";
    case "Thunderstorm with heavy drizzle":
      return "cloud-bg";
    case "Thunderstorm with Hail":
      return "cloud-bg";
    //Rain
    case "Light Drizzle":
      return "rain-bg";
    case "Drizzle":
      return "rain-bg";
    case "Heavy Drizzle":
      return "rain-bg";
    case "Light rain":
      return "rain-bg";
    case "Moderate Rain":
      return "rain-bg";
    case "Heavy Rain":
      return "rain-bg";
    case "Freezing rain":
      return "rain-bg";
    case "Light shower rain":
      return "rain-bg";
    case "Shower rain":
      return "rain-bg";
    case "Heavy shower rain":
      return "rain-bg";
    //Snow
    case "Light snow":
      return "cloud-bg";
    case "Snow":
      return "sunny-bg";
    case "Heavy Snow":
      return "wind-bg";
    case "Mix snow/rain":
      return "wind-bg";
    //wind
    case "Sleet":
      return "wind-bg";
    case "Heavy sleet":
      return "wind-bg";
    case "Snow shower":
      return "wind-bg";
    case "Heavy snow shower	":
      return "wind-bg";
    case "Flurries":
      return "wind-bg";
    case "Mist":
      return "wind-bg";
    case "Smoke":
      return "wind-bg";
    case "Haze":
      return "wind-bg";
    case "Sand/dust":
      return "wind-bg";
    case "Fog":
      return "wind-bg";
    case "Freezing Fog":
      return "wind-bg";
    //clear sky
    case "Clear sky":
      return "sunny-bg";
    //misc
    case "Few clouds":
      return "sunny-bg";
    case "Scattered clouds":
      return "sunny-bg";
    case "Broken clouds":
      return "cloud-bg";
    case "Overcast clouds":
      return "cloud-bg";
    case "Unknown Precipitation":
      return "cloud-bg";
    //
    default:
      return "cloud-bg";
    //
  }
};