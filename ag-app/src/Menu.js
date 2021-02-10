import React, { Component } from "react";
import MenuItem from "./MenuItem";

class Menu extends Component {
  defaultProps = {
    menuPage: true,
    menuData: ''
  };

  render() {
    return this.props.menuPage ? (
      <div>

        {this.props.menuData.map((row, index) => {
          return (
            <div className="row px-lg-4 justify-content-center mb-3" key={index}>
              {row.map((item, i) => {
                return (
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
      </div>
    ) : (
      ""
    );
  }
}

export default Menu;