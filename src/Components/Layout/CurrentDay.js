import React, { Component } from "react";
import { Consumer } from "../../Context";
import setBackground from "../../setBackground";

class CurrentDay extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { day } = value;
          const description = ((day || {}).weather || {}).description;

          return (
            <section
              className={`currentDay-container ${setBackground(
                description
              )} shadows`}
            >
              <h2>Temperature:</h2>
              <h3>{day.temp}°</h3>
              <div className="bottom-info">
                <p className="day-p">Feels like {day.app_temp}°</p>
                <p className="day-p">{description}</p>
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default CurrentDay;
