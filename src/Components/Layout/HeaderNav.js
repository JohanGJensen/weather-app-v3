import React, { Component } from "react";
import { Consumer } from "../../Context";

class HeaderNav extends Component {
  state = {
    condition: true,
    city: ""
  };

  openMenu = () => {
    if (this.state.condition !== true) {
      this.setState({ condition: true });
    } else {
      this.setState({ condition: false });
    }
  };

  handleChange = e => {
    this.setState({ city: e.target.value });
  };

  handleSubmit = (dispatch) => {
        dispatch({ type: "ADD_CITY", payload: this.state.city.toLowerCase() });
        this.setState({ city: "" });
 
  };

  handleCity = (dispatch, activateFetch, e) => {
    dispatch({ type: "CHANGE_CITY", payload: e.target.value });
    activateFetch(e.target.value);
  };

  handleDelete = (dispatch, cityList, e) => {
    console.log(e.target.value)
    dispatch({type: "DELETE_CITY", payload: e.target.value})
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { day, cityList, dispatch, activateFetch } = value;
          return (
            <header>
              <h1>{day.city_name}</h1>
              <nav className="burger-container">
                <div className="burger-btn" onClick={this.openMenu}>
                  <div
                    className={this.state.condition ? "bar1" : "change1 bar1"}
                  />
                  <div
                    className={this.state.condition ? "bar2" : "change2 bar2"}
                  />
                  <div
                    className={this.state.condition ? "bar3" : "change3 bar3"}
                  />
                </div>
              </nav>

              <section
                className={
                  this.state.condition
                    ? "city-menu"
                    : "city-menu-toggled city-menu"
                }
              >
                <div className="city-list">
                  <input
                    value={this.state.city}
                    className="city-list-input"
                    placeholder="Search for City..."
                    type="text"
                    onChange={this.handleChange}
                  />
                  <button
                    className="city-list-button"
                    onClick={this.handleSubmit.bind(this, dispatch)}
                  >
                    ADD CITY!
                  </button>
                  <ul className="city-list-ul">
                    {cityList.map(e => (
                      <li key={e} className="city-list-li">
                        <button
                          className="city-list-item"
                          value={e}
                          onClick={this.handleCity.bind(
                            this,
                            dispatch,
                            activateFetch
                          )}
                        >
                          {e}
                        </button>
                        <button value={e} onClick={this.handleDelete.bind(this, dispatch, cityList)} className="delete-btn">X</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </header>
          );
        }}
      </Consumer>
    );
  }
}

export default HeaderNav;
