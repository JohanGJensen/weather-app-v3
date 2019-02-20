import Rain from "./icons/u00n.png";
import Sun from "./icons/c01d.png";
import Thunder from "./icons/t05d.png";
import Wind from "./icons/s05n.png";
import Snow from "./icons/s06n.png";
import Cloud from "./icons/c04d.png";

export default function setIcon(e) {
  switch (e) {
    //Thunderstorms
    case "Thunderstorm with light rain":
      return Thunder;
    case "Thunderstorm with rain":
    return Thunder;
    case "Thunderstorm with heavy rain":
    return Thunder;
    case "Thunderstorm with light drizzle":
    return Thunder;
    case "Thunderstorm with drizzle":
    return Thunder;
    case "Thunderstorm with heavy drizzle":
    return Thunder;
    case "Thunderstorm with Hail":
    return Thunder;
    //Rain
    case "Light Drizzle":
      return Rain;
    case "Drizzle":
    return Rain;
    case "Heavy Drizzle":
    return Rain;
    case "Light rain":
    return Rain;
    case "Moderate Rain":
    return Rain;
    case "Heavy Rain":
    return Rain;
    case "Freezing rain":
    return Rain;
    case "Light shower rain":
    return Rain;
    case "Shower rain":
    return Rain;
    case "Heavy shower rain":
    return Rain;
    //Snow
    case "Light snow":
    return Snow;
    case "Snow":
    return Snow;
    case "Heavy Snow":
    return Snow;
    case "Mix snow/rain":
    return Snow;
    //wind
    case "Sleet":
      return Wind;
    case "Heavy sleet":
    return Wind;
    case "Snow shower":
    return Wind;
    case "Heavy snow shower	":
    return Wind;
    case "Flurries":
    return Wind;
    case "Mist":
    return Wind;
    case "Smoke":
    return Wind;
    case "Haze":
    return Wind;
    case "Sand/dust":
    return Wind;
    case "Fog":
    return Wind;
    case "Freezing Fog":
    return Wind;
    //clear sky
    case "Clear sky":
      return Sun;
    //misc
    case "Few clouds":
      return Cloud;
    case "Scattered clouds":
    return Cloud;
    case "Broken clouds":
    return Cloud;
    case "Overcast clouds":
    return Cloud;
    case "Unknown Precipitation":
    return Cloud;
    //
    default:
      return Sun;
    //
  }
};