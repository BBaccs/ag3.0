import React, { Component } from "react";
import SrOnlyHeading from "./SrOnlyHeading";
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  defaultProps = {
    homePage: false,
    srOnlyMenuTitle: "test",
    srOnlyHeaderLevel: "h1",
    backButton: true,
    menuTitle: "",
    menuSubtitle: "",
  };

  render() {
    const backButton = (
      <div className="select-category-bg">
        <NavLink to="/pages/mainMenu/index.html">
          <div className="d-flex">
            <div className="h1 w-100 py-4 my-1">Select New Category ^</div>
          </div>
        </NavLink>
      </div>
    );

    let menuCategory = (
      <div className="menu-category menu-category-selected">
        <div className="d-flex justify-content-center">
          <div className="d-flex align-items-center w-100 flex-column pb-1">
            {this.props.menuSubtitle ? (
              <div>
                <h1 className="h2 pb-1">{this.props.menuTitle}</h1>
              <p
                className="mt-0 pb-3 primary-color"
                style={{ fontSize: ".7rem" }}
              >
                {this.props.menuSubtitle}
              </p>
              </div>
            ) : (
              <h1 className="h2 no-subhead-padding">{this.props.menuTitle}</h1>
            )}
          </div>
          <img
            className="animal-graphic d-lg-none"
            src="/assets/agGraphicElements/animals/mobile/agPigVectorSmall.png"
            alt=""
          />
        </div>
      </div>
    );

    return this.props.homePage ? (
      <section>
        <SrOnlyHeading
          headerLevel={this.props.srOnlyHeaderLevel}
          srOnlyMenuTitle={this.props.srOnlyMenuTitle}
        >
          test
        </SrOnlyHeading>

        <ul className="row px-lg-4 justify-content-center mb-3">
          {this.props.menuData.map((item, i) => {
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
        </ul>
      </section>
    ) : (
      <main id="menu-category-page" class="menu-page">
        <SrOnlyHeading headerLevel={this.props.srOnlyHeaderLevel}>
          test
        </SrOnlyHeading>

        <div class="menu-item-bg menu-wrapper-lg pb-5">

          {this.props.backButton ? backButton : ""}

          {this.props.backButton ? menuCategory : ""}

          <div className="row px-lg-4 pt-lg-5 justify-content-center product-list-wrapper-lg">
            <ul className="row px-lg-4 justify-content-center mb-3 mobile-menu-item menu-item-bg">
              {this.props.menuData.map((item, i) => {
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
            </ul>
          </div>

          <div className="row">
            <div className="m-auto">
              <NavLink
                style={{ width: "150px" }}
                className="btn btn-primary btn-lg mr-5"
                to="/ag3.0/pages/otherPages/pickup.html"
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

export default Menu;
