import React, { Component } from "react";
import { Consumer } from "../../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import setIcon from "../../setIcon";

//<FontAwesomeIcon icon="sun" size="2x" color="#D5C664" />
//<img src={setIcon(((e || {}).weather || {}).description)} style={{width: "50px", height: "50px"}} alt="icon"/>

class DayHourly extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { hours } = value;
          const hour = hours.slice(0, 10);

          return (
            <section className="hours-container">
              {hour.map(e => (
                <div className="hourly-container">
                  <FontAwesomeIcon
                    icon={setIcon(((e || {}).weather || {}).description)}
                    size="2x"
                    color="#4887a2"
                  />

                  <p className="hour-p">
                    {new Date(e.timestamp_utc).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </p>
                </div>
              ))}
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default DayHourly;
