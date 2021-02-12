import React, { Component } from "react";
import SrOnlyHeading from "./SrOnlyHeading";
import MenuItem from "./MenuItem";

class Menu extends Component {
  defaultProps = {
    menuPage: true,
    menuData: '',
    srOnlyMenuTitle: 'test',
    srOnlyHeaderLevel: 'h1'
  };

  render() {
    return this.props.menuPage ? (
      <section>
        <SrOnlyHeading headerLevel={this.props.srOnlyHeaderLevel} srOnlyMenuTitle={this.props.srOnlyMenuTitle}>ets</SrOnlyHeading>
        {this.props.menuData.map((row, index) => {
          return (
            <div className="row px-lg-4 justify-content-center mb-3" key={index}>
              {row.map((item, i) => {
                return (
                  // add item
                  <MenuItem
                    title={item.title}
                    img={item.img}
                    src={item.src}
                    imgFilePath={item.imgFilePath}
                    imgType={item.imgType}
                    cta={item.cta}
                    key={i}
                  />
                );
              })}
            </div>
          );
        })}
      </section>
    ) : (
      // <main id="menu-category-page" class="menu-page">
<div>
<SrOnlyHeading headerLevel={this.props.srOnlyHeaderLevel}>test</SrOnlyHeading >

    <div class="d-none d-lg-block menu-item-bg menu-wrapper-lg pb-5">
          {/* <!-- Start Menu Item Row it's a double--> */}
          {this.props.menuData.map((row, index) => {
          return (
            <div className="d-none d-lg-block row px-lg-4 pt-lg-5 justify-content-center product-list-wrapper-lg" key={index}>
              {row.map((item, i) => {
                return (
                  // add item
                  <MenuItem
                    title={item.title}
                    img={item.img}
                    src={item.src}
                    imgFilePath={item.imgFilePath}
                    imgType={item.imgType}
                    cta={item.cta}
                    key={i}
                  />
                );
              })}
            </div>
          );
        })}
 
        <div class="row">
            <div class="m-auto">
                <a style="width: 150px;" class="btn btn-primary btn-lg mr-5" href="/ag3.0/pages/otherPages/pickup.html">Order</a>
            </div>
        </div>
  </div>

  <div class="d-lg-none">
    <ul>
      <li>
        <a class="d-block py-3 menu-item-bg" href="/ag3.0/pages/mainMenu/menuCategories/handhelds.html">
          <h2>Handhelds</h2>
        </a>
      </li>
      <li>
        <a class="d-block py-3 menu-item-bg" href="/ag3.0/pages/mainMenu/menuCategories/largePlates.html">
            <h2>Large Plates</h2>
        </a>
      </li>
      <li>
        <a class="d-block py-3 menu-item-bg" href="/ag3.0/pages/mainMenu/menuCategories/salads.html">
            <h2>Salads</h2>
        </a>  
      </li>
      <li>
        <a class="d-block py-3 menu-item-bg" href="/ag3.0/pages/mainMenu/menuCategories/sidesAndSnacks.html">
            <h2>Sides & Snacks</h2>
        </a>
      </li>
      <li>
        <a class="d-block py-3 menu-item-bg" href="/ag3.0/pages/mainMenu/menuCategories/kids.html">
            <h2>Kids</h2>
        </a>
      </li>
      <li>
        <a class="d-block py-3 menu-item-bg" href="/ag3.0/pages/mainMenu/menuCategories/dessertsAndBeverages.html">
            <h2>Desserts & Beverages</h2>
        </a>
      </li>
    </ul>
  </div>
</div>
  
    );
  }
}

export default Menu;