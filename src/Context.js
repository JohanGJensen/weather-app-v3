import React from "react";
//import uuid from "uuid";

const context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CITY":
      return {
        ...state,
        city: action.payload
      };
    case "ADD_CITY":
      return {
        ...state,
        cityList: [action.payload, ...state.cityList]
      };
    case "DELETE_CITY":
      return {
        ...state,
        cityList: state.cityList.filter(post => post !== action.payload)
      };
    default:
      return state;
  }
};

export class Provider extends React.Component {
  state = {
    key: "9ff2e52800774f8a9268bf9b6fb7deba",
    city: "svendborg",
    cityList: ["svendborg"],
    day: "",
    hours: [],
    week: [],
    dispatch: action => this.setState(state => reducer(state, action)),
    activateFetch: (e) => {const cityInfo = e; this.runFetch(cityInfo)}
  };

  componentDidMount() {
    this.state.activateFetch(this.state.city);
  }

  componentDidUpdate() {
    const cityList = [...this.state.cityList];
    localStorage.setItem("cityList", JSON.stringify(cityList));
  }

  runFetch = (currentCity) => {
    if (localStorage.getItem("cityList") === null) {
      this.setState({cityList: [this.state.city]});
    } else {
    let value = localStorage.getItem("cityList");
    value = JSON.parse(value);

    this.setState({ cityList: value });
    }

    const { key, city } = this.state;

    //Fetching daily forecast.
    fetch(`https://api.weatherbit.io/v2.0/current?city=${currentCity !== null ? currentCity : city}&key=${key}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const dayWeather = data.data;

        for (let i = 0; dayWeather.length > i; i++) {
          this.setState({ day: dayWeather[i] });
        }
      });

    //Fetching hourly forecast (every 3 hours)
    fetch(
      `https://api.weatherbit.io/v2.0/forecast/3hourly?city=${currentCity = null ? currentCity : city}&key=${key}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        const fiveDays = data.data;

        for (let i = 0; fiveDays.length > i; i++) {
          this.setState({ hours: [...this.state.hours, fiveDays[i]] });
        }
      });

    //Fetching 5 day forecast
    fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${currentCity = null ? currentCity : city}&key=${key}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        const daily = data.data;

        for (let i = 0; daily.length > i; i++) {
          this.setState({ week: [...this.state.week, daily[i]] });
        }
      });
  }

  render() {
    return (
      <context.Provider value={this.state}>
        {this.props.children}
      </context.Provider>
    );
  }
}

export const Consumer = context.Consumer;
