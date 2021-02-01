import React, { Component } from "react";
import MenuItem from "./MenuItem";
import { HomeMenuItemsData } from "./HomeMenuItemsData";

class Menu extends Component {
  defaultProps = {
    menuPage: true,
  };

  render() {
    return this.props.menuPage ? (
      <div>
        {HomeMenuItemsData.map((item, index) => {
          return (
            <MenuItem
              title={item.title}
              img={item.img}
              src={item.src}
              imgFilePath={item.imgFilePath}
              key={index}
              imgType={item.imgType}
            />
          );
        })}
      </div>
    ) : (
      ""
    );
  }
}

export default Menu;




        // {/* <!-- Start Menu Item Row--> */}
        // <div class="row px-lg-4 justify-content-center">
        //   {/* <!-- Handhelds Menu Item--> */}
        //   <MenuItem
        //     title={"Handhelds"}
        //     img={"crispyChickenSrirachaSandwich"}
        //     src={"pages/mainMenu/menuCategories/handhelds.html"}
        //     imgFilePath={"foodImages/categoryImages"}
        //   />

        //   {/* <!-- Large PLates Menu Item--> */}
        //   <MenuItem
        //     title={"Large Plates"}
        //     img={"slicedSteakPlatter"}
        //     src={"pages/mainMenu/menuCategories/slicedSteakPlatter.html"}
        //     imgFilePath={"foodImages/categoryImages"}
        //   />

        //   {/* <!-- Salads --> */}
        //   <MenuItem
        //     title={"Salads"}
        //     img={"appleArugulaSaladChicken"}
        //     src={"pages/mainMenu/menuCategories/salads.html"}
        //     imgFilePath={"foodImages/categoryImages"}
        //   />
        // </div>

              //   {/* <!-- Start Menu Item Row--> */}
              //   <div class="row px-lg-4 justify-content-center">
              //   {/* <!-- Handhelds Menu Item--> */}
              //   <MenuItem
              //     title={"Handhelds"}
              //     img={"crispyChickenSrirachaSandwich"}
              //     src={"pages/mainMenu/menuCategories/handhelds.html"}
              //     imgFilePath={"foodImages/categoryImages"}
              //   />
      
              //   {/* <!-- Large PLates Menu Item--> */}
              //   <MenuItem
              //     title={"Large Plates"}
              //     img={"slicedSteakPlatter"}
              //     src={"pages/mainMenu/menuCategories/slicedSteakPlatter.html"}
              //     imgFilePath={"foodImages/categoryImages"}
              //   />
      
              //   {/* <!-- Salads --> */}
              //   <MenuItem
              //     title={"Salads"}
              //     img={"appleArugulaSaladChicken"}
              //     src={"pages/mainMenu/menuCategories/salads.html"}
              //     imgFilePath={"foodImages/categoryImages"}
              //   />
              // </div>