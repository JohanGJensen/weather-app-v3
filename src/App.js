import React, { Component } from "react";

//Components
import HeaderNav from "./Components/Layout/HeaderNav";
import CurrentDay from "./Components/Layout/CurrentDay";
import DayHourly from "./Components/Layout/DayHourly";
import TheWeek from "./Components/Layout/TheWeek";
import HumidityAndDew from "./Components/Layout/HumidityAndDew";

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faCloud,
  faCloudRain,
  faWind,
  faSnowflake,
  faBolt,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSun,
  faCloud,
  faCloudRain,
  faWind,
  faSnowflake,
  faBolt,
  faTrashAlt
);

class App extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <div className="main-container">
          <CurrentDay />
          <DayHourly />
          <TheWeek />
          <HumidityAndDew />
        </div>
      </div>
    );
  }
}

export default App;
