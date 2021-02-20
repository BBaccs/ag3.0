import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class PDP extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };
  static defaultProps = {
    catering: false
  }
  render() {
    let name = this.props.match.params.name;
    return this.props.data.map((item) => {
      if (name === item.img) {
        return (
          <main
            id={`${name}`}
            className="menu-page menu-page-bg product-description-page"
          >
            <div id="skip-link" className="container-fluid mt-0 p-3 pt-4">
              {/* <!-- Responsive pictures --> */}
              <picture>
                <source
                  srcSet={`/assets/${item.imgFilePath}/desktop/${item.img}800x600.jpg`}
                  media="(min-width: 1600px)"
                />
                <source
                  srcSet={`/assets/${item.imgFilePath}/desktop/${item.img}500x375.jpg`}
                  media="(min-width: 768px)"
                />
                {/* <!-- The <img /> is the fall back for non browser compatible w/ picture tag and mobile version.  --> */}
                <img
                  className="m-auto product-image"
                  src={`/assets/${item.imgFilePath}/mobile/${item.img}345x260.jpg`}
                  alt=""
                />
              </picture>
              <h1 className="pdp-header text-left text-md-center">
                {item.title}
              </h1>
              <div className="product-content-wrapper">
                <p className="product-description text-left text-md-center pl-2 pl-md-0">
                  {item.pdpDescription}
                </p>
              </div>
              {/* Catering pages link to a different (external) order page */}
              {!this.props.catering ? (
                <div className="row py-5 d-none d-lg-block">
                  <div className="m-auto">
                    <NavLink
                      to="/pages/otherPages/pickup.html"
                      className="btn btn-primary btn-lg mr-5 pdp-lg-button"
                    >
                      Order
                    </NavLink>
                  </div>
                </div>
              ) : (
                <div className="row py-5 d-none d-lg-block">
                  <div className="m-auto">
                    <a
                      href="https://www.ezcater.com/brand/pvt/aussie-grill"
                      className="btn btn-primary btn-lg mr-5 pdp-lg-button"
                    >
                      Order
                    </a>
                  </div>
                </div>
              )}
            </div>
          </main>
        );
      }
    });
  }
}

export default PDP;
