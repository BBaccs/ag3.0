import React, { Component } from "react";
import SrOnlyHeading from "./SrOnlyHeading";
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  defaultProps = {
    menuPage: false,
    srOnlyMenuTitle: "test",
    srOnlyHeaderLevel: "h1",
    backButton: true,
  };

  render() {
    return this.props.menuPage ? (
      <section>
        <SrOnlyHeading
          headerLevel={this.props.srOnlyHeaderLevel}
          srOnlyMenuTitle={this.props.srOnlyMenuTitle}
        >
          test
        </SrOnlyHeading>
        {this.props.backButton ? (
          <div className="fe">go back</div>
        ) : (
          <div className="dew">test</div>
        )}

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

        <div class="d-none d-lg-block menu-item-bg menu-wrapper-lg pb-5">
          {/* <!-- Start Menu Item Row it's a double--> */}
          {/* {this.props.menuData.map((row, index) => {
            return (
              <div
                className="d-none d-lg-block row px-lg-4 pt-lg-5 justify-content-center product-list-wrapper-lg"
                key={index}
              >
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
              </div>
            );
          })} */}

          {this.props.backButton ? (
            <div className="fe">go back</div>
          ) : (
            <div className="dew">test</div>
          )}

          <div className="d-none d-lg-block row px-lg-4 pt-lg-5 justify-content-center product-list-wrapper-lg">
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
