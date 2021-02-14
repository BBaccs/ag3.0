import React, { Component } from "react";
import SrOnlyHeading from "./SrOnlyHeading";
import { NavLink } from "react-router-dom";
import { HandheldData } from "./assets/data/menuData/HandheldData";
import { LargePlates } from "./assets/data/menuData/LargePlates";

class PDP extends Component {
  static defaultProps = {
    pdpMenuItem: "BBQ Ribs",
    pdpDescription: "BBQ baby back ribs, spicy BBQ sauce & choice of side.",
    pdpMenuTitle: 'BACON BOMB BURGER',
    imgFilePath: 'foodImages/productImages/handhelds',
    img: 'baconBombPork'
  };
  render() {
    return (
      <main
        id={`${this.props.pdpTitle}-skip-link`}
        className="menu-page menu-page-bg product-description-page"
      >
        <div className="container-fluid mt-0 p-3 pt-4">
          {/* <!-- Responsive pictures --> */}
          <picture>
            <source
              srcset={`/assets/${this.props.imgFilePath}/desktop/${this.props.img}800x600.jpg`}
              media="(min-width: 1600px)"
            />
            <source
              srcset={`/assets/${this.props.imgFilePath}/desktop/${this.props.img}500x375.jpg`}
              media="(min-width: 768px)"
            />
            {/* <!-- The <img /> is the fall back for non browser compatible w/ picture tag and mobile version.  --> */}
            <img
              className="m-auto product-image"
              src={`/assets/${this.props.imgFilePath}/mobile/${this.props.img}345x260.jpg`}
              alt=""
            />
          </picture>
          <h1 className="pdp-header text-left text-md-center">
            {this.props.pdpMenuItem}
          </h1>
          <div className="product-content-wrapper">
            <p className="product-description text-left text-md-center pl-2 pl-md-0">
              {this.props.pdpDescription}
            </p>
          </div>
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
        </div>
      </main>
    );
  }
}

export default PDP;
