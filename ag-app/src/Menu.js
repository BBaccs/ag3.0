import React, { Component } from "react";
import MenuItem from "./MenuItem";

class Menu extends Component {
  defaultProps = {
    menuPage: true
  }
  render() {
    return (
      this.props.menuPage ? 
      <div>
        {/* <!-- Start Menu Item Row--> */}
        <div class="row px-lg-4 justify-content-center">
          {/* <!-- Handhelds Menu Item--> */}
          <MenuItem
            title={"Handhelds"}
            img={"crispyChickenSrirachaSandwich"}
            src={"pages/mainMenu/menuCategories/handhelds.html"}
            imgFilePath={"foodImages/categoryImages"}
          />

          {/* <!-- Large PLates Menu Item--> */}
          <MenuItem
            title={"Large Plates"}
            img={"slicedSteakPlatter"}
            src={"pages/mainMenu/menuCategories/slicedSteakPlatter.html"}
            imgFilePath={"foodImages/categoryImages"}
          />

          {/* <!-- Salads --> */}
          <MenuItem
            title={"Salads"}
            img={"appleArugulaSaladChicken"}
            src={"pages/mainMenu/menuCategories/salads.html"}
            imgFilePath={"foodImages/categoryImages"}
          />
        </div>

        {/* <!-- Start Menu Item Row--> */}
        <div class="row px-lg-4 justify-content-center">
          {/* <!-- Sides & Snacks Menu Item--> */}
          <MenuItem
            title={"Sides & Snacks"}
            img={"augVolcanoShrimp"}
            src={"pages/mainMenu/menuCategories/augVolcanoShrimp.html"}
            imgFilePath={"foodImages/categoryImages"}
          />

          {/* <!-- Kids --> */}
          <MenuItem
            title={"Kids"}
            img={"crispyChickenTenders"}
            src={"pages/mainMenu/menuCategories/crispyChickenTenders.html"}
            imgFilePath={"foodImages/categoryImages"}
          />

          {/* <!-- Desserts & Beverages --> */}
          <MenuItem
            title={"Desserts & Beverages"}
            img={"oreoAndToastedPecanSundae"}
            src={"pages/mainMenu/menuCategories/dessertsAndBeverages.html"}
            imgFilePath={"foodImages/categoryImages"}
          />
        </div>
        {/* <!-- End Menu Item Row-->

        <!-- Start Card Row--> */}
        <div class="row mt-lg-4 px-lg-2 card-col">
          <div class="col-lg-4 col-md-6 m-md-auto mt-4 pt-3 card-col">
            <MenuItem
              title={"Catering"}
              img={"catering"}
              src={"pages/otherPages/careers.html"}
              imgFilePath={"other"}
              cta={'See Menu'}
            />
          </div>
          <div class="col-lg-4 col-md-6 m-md-auto mt-4 pt-3 card-col">
          <MenuItem
              title={"Careers"}
              img={"employeeMobile"}
              src={"pages/otherPages/careers.html"}
              imgFilePath={"other"}
              cta={'Join the fam'}
            />
          </div>

          <div class="col-lg-4 col-md-8 m-md-auto mt-4 pt-3 card-col">
          <MenuItem
              title={"READY TO JOIN THE ADVENTURE?"}
              img={"franchiseInformationLutzWall"}
              src={"pages/otherPages/franchise.html"}
              imgFilePath={"other"}
              cta={'Explore more here'}
              imgType={'png'}
            />
          </div>
        </div>
        {/* <!-- End Card Row--> */}
      </div>
      : ''
    );
  }
}

export default Menu;
