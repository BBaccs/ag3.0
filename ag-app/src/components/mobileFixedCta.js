import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MobileFixedCTA extends Component {
  static defaultProps = {
    catering: false
  }
  render() {
    return (
      <div className="cta-wrapper">
        <div className="d-flex container-fluid justify-content-between align-items-center cta-banner">
          <img
            className="bull-cta"
            src="/assets/agGraphicElements/animals/mobile/bullFullSmall.png"
            alt=""
          />
          {this.props.catering ? (
            <a
              href="https://www.ezcater.com/brand/pvt/aussie-grill"
              className="btn btn-primary cta-primary"
            >
              Order now
            </a>
          ) : (
            <NavLink
              to="/pages/otherPages/pickup.html"
              className="btn btn-primary cta-primary"
            >
              Order now
            </NavLink>
          )}
        </div>
      </div>
    );
  }
}

export default MobileFixedCTA;
