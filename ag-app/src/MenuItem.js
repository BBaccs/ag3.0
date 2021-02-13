import React, { Component } from "react";

class MenuItem extends Component {
  static defaultProps = {
    imgFilePath: "foodImages/productImages",
    imgType: "jpg"
  };

  render() {
    let menuItemImage = this.props.menuPage ? (
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
          class="w-100 menu-item-img"
          src={`/assets/${this.props.imgFilePath}/mobile/${this.props.img}345x260.${this.props.imgType}`}
          alt=""
        />
      </div>
    );

    return (
      <li class={"col-lg-4 col-md-6 mt-4 pt-3 pt-md-0 menu-item-col"}>
        <a className={"d-block"} aria-label={`View ${this.props.title}`} href={`${this.props.src}`}>
          <div class="primary-subheading-wrapper">
            <div class="w-100">
              <h2 class="mb-0 primary-subheading">{this.props.title}</h2>
            </div>
          </div>
          <div>
            {menuItemImage}
            {this.props.cta ? (
              <div class="btn-bottom-wrapper">
                <div class="btn btn-primary">{this.props.cta}</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </a>
      </li>
    );
    // <!-- CRISPY SHRIMP PO'BOY  -->
    // <a href="/ag3.0/pages/mainMenu/menuCategories/handhelds/crispyShrimpPoBoy.html" class="d-block">
    //     <div class="col-xl-4 col-md-6 pt-lg-0 product-content-wrapper-lg container-fluid-fluid py-3 pt-5 menu-item-col">
    //         <div class="primary-subheading-wrapper w-100 justify-content-center">
    //             <h3 class="mb-0 primary-subheading">CRISPY SHRIMP PO'BOY</h3>
    //         </div>
    //         <div>
    //             <img class="w-100 subheading-img" src="/ag3.0/assets/foodImages/productImages/desktop/handhelds/crispyshrimpPoBoy500x375.jpg" alt="" />
    //         </div>
    //         <div class="pt-3 product-content-wrapper">
    //             <p class="product-description">Crispy shrimp, house-made pickles, creamy Cajun sauce.
    //             </p>
    //             <div class="product-description-preview mt-1">Only available at Lutz location</div>
    //         </div>
    //     </div>
    // </a>

    /* <div class="mobile-menu-item menu-item-bg">
<a class="d-block" href="/ag3.0/pages/mainMenu/menuCategories/handhelds/crispyShrimpPoBoy.html">
    <h3 class="pb-1">CRISPY SHRIMP PO'BOY <span>></span></h3>
    <div class="product-description-preview">Only available at Lutz location</div>
</a>
</div> */

    //   //Should not be seperate HTML, <ul> & <li> need be used on all of them. Use state & mediaqueries, CSS etc.
    //   <div class="d-lg-none">
    //   <ul>
    //     <li>
    //       <a className="d-block py-3 menu-item-bg" href={`${this.props.title}`}>
    //         <h2>{this.props.title}</h2>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  }
}

export default MenuItem;
