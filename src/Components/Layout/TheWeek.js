import React, { Component } from "react";
import { Consumer } from "../../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import setBackground from "../../setBackground";
import setIcon from "../../setIcon";

//<FontAwesomeIcon icon="cloud-rain" size="3x" color="#fff" />
//<img src={setIcon(((e || {}).weather || {}).description)} alt="icon"/>

class TheWeek extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { week } = value;

          const weekDays = week.slice(1, 8);
          const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ];

          return (
            <section className="week-container">
              {weekDays.map(e => (
                <div
                  className={`week-box ${setBackground(
                    ((e || {}).weather || {}).description
                  )} shadows`}
                >
                  <p className="week-p">
                    {days[new Date(e.valid_date).getDay()]}
                  </p>
                  <h5>{e.temp}°</h5>

                  <FontAwesomeIcon
                    icon={setIcon(((e || {}).weather || {}).description)}
                    size="3x"
                    color="#fff"
                  />
                </div>
              ))}
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default TheWeek;
