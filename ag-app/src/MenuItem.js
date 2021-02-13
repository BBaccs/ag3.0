import React, { Component } from "react";

class MenuItem extends Component {
  static defaultProps = {
    imgFilePath: "foodImages/productImages",
    imgType: "jpg",
    homePage: false
  };

  render() {
    let menuItemImage = this.props.homePage ? (
      <picture>
        <source
          srcSet={`/assets/${this.props.imgFilePath}/desktop/${this.props.img}500x375.${this.props.imgType}`}
          media="(min-width: 768px)"
        />
        <img
          class="w-100 menu-item-img"
          src={`/assets/${this.props.imgFilePath}/mobile/${this.props.img}345x260.${this.props.imgType}`}
          alt=""
        />
      </picture>
    ) : (
      <div>
        <img
          class="w-100 menu-item-img d-none d-md-block"
          src={`/assets/${this.props.imgFilePath}/mobile/${this.props.img}345x260.${this.props.imgType}`}
          alt=""
        />
      </div>
    );

    return (
      <li className={"col-lg-4 col-md-6 mt-4 pt-3 pt-md-0 menu-item-col"}>
        <a className={"d-block"} aria-label={`View ${this.props.title}`} href={`${this.props.src}`}>
          <div className="col-xl-4 col-md-6 pt-lg-0 product-content-wrapper-lg container-fluid-fluid pt-5 menu-item-col">
            <div className="primary-subheading-wrapper w-100 justify-content-center">
              <div className="mb-0 primary-subheading">{this.props.title}</div>
            </div>
          </div>
          <div>
            {menuItemImage}
            {this.props.cta ? (
              <div className="btn-bottom-wrapper">
                <div className="btn btn-primary">{this.props.cta}</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </a>
      </li>
    );
  }
}

export default MenuItem;
