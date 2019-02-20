import React, { Component } from "react";
import { Consumer } from "../../Context";

class HumidityAndDew extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { day } = value;
          return (
            <section className="dew-hum-container">
              <div className="infoBox rain-bg shadows humidity">
                <h4>Humidity:</h4>
                <h3>{day.rh}</h3>
              </div>
              <div className="infoBox rain-bg shadows dewPoint">
                <h4>Dew Point:</h4>
                <h3>{day.dewpt}</h3>
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default HumidityAndDew;
