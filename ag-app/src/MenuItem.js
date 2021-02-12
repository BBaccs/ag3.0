import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class MenuItem extends Component {
  static defaultProps = {
    imgFilePath: 'foodImages/productImages',
    imgType: 'jpg'
  };

  render() {
    return (
      !this.props.mobile ? 
      <div class={'col-lg-4 col-md-6 mt-4 mt-md-0 pt-3 pt-md-0 menu-item-col'}>
      <a
        aria-label={`View ${this.props.title}`}
        href={`${this.props.src}`}
      >
        <div class="primary-subheading-wrapper">
          <div class="w-100">
            <h2 class="mb-0 primary-subheading">{this.props.title}</h2>
          </div>
        </div>
        <div>
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
          { this.props.cta ? 
          <div class="btn-bottom-wrapper">
            <div class="btn btn-primary">{this.props.cta}</div>
          </div>
          : ''
          }

        </div>
      </a>
    </div>
    :
    //Should not be seperate HTML, <ul> & <li> need be used on all of them. Use state & mediaqueries, CSS etc.
    <div class="d-lg-none">
    <ul>
      <li>
        <a className="d-block py-3 menu-item-bg" href={`${this.props.title}`} aria-label={`View ${this.props.title}`}>
          <h2>{this.props.title}</h2>
        </a>
      </li>
    </ul>
  </div>
    )
  }
}

export default MenuItem;