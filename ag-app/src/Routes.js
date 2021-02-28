import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { MenuCategoryData } from "./assets/data/menuData/MenuCategoryData";
import { FranchiseNavItems } from "./assets/data/navData/FranchiseNavItems";
import { NotAMenuData } from "./assets/data/menuData/NotAMenuData";
import { HandheldData } from "./assets/data/menuData/HandheldData";
import { LargePlates } from "./assets/data/menuData/LargePlates";
import { CateringCategoryData } from "./assets/data/menuData/cateringMenuData/CateringCategoryData";
import { CateringPlattersData } from "./assets/data/menuData/cateringMenuData/CateringPlattersData";
import { CateringSaladPlattersData } from "./assets/data/menuData/cateringMenuData/CateringSaladPlattersData";
import { CateringSidePlattersData } from "./assets/data/menuData/cateringMenuData/CateringSidePlattersData";
import { MainMenuData } from "./assets/data/menuData/MainMenuData";
import { Locations } from "./assets/data/locations/Locations";
import LocationsCard from "./components/LocationsCard";
import NavBar from "./components/NavBar";
import HeroImg from "./components/HeroImg";
import Menu from "./components/Menu";
import PDP from "./components/PDP";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/pages/otherPages/ourStory.html"
          render={() => (
            <div>
              <NavBar />
              <HeroImg img={"ourStory"} />
              <h2>ourStory</h2>
            </div>
          )}
        />
        <Route
          exact
          path="/pages/otherPages/careers.html"
          render={() => (
            <div>
              <NavBar />
              <h2>CAREERS</h2>
            </div>
          )}
        />
        <Route
          exact
          path="/pages/otherPages/franchise.html"
          render={() => (
            <div>
              <NavBar navData={FranchiseNavItems} />
              <h2>FRANCHISE</h2>
            </div>
          )}
        />
        <Route
          exact
          path="/pages/otherPages/pickup.html"
          render={() => (
            <div>
              <NavBar pickup={true} />
              <main id="pickup-page" className="landing-page">
                <div className="container-fluid text-center landing-content-wrapper">
                  <h1 className="landing-heading mb-4 mb-lg-5">
                    Choose your location to place an order!
                  </h1>
                  {Locations.map((location, index) => {
                    return (
                      <LocationsCard
                        key={index}
                        name={location.name}
                        description={location.description}
                        address={location.address}
                        directionsLink={location.directionsLink}
                        pickup={location.pickup}
                        ddLink={location.ddLink}
                        uberEatsLink={location.uberEatsLink}
                        pdf={location.pdf}
                      />
                    );
                  })}
                  <div
                    style={{ maxWidth: "1200px" }}
                    className="mt-md-4 mx-auto"
                  ></div>
                </div>
              </main>
            </div>
          )}
        />
        <Route
          exact
          path="/pages/otherPages/contact.html"
          render={() => (
            <div>
              <NavBar />
              <main id="pickup-page" className="landing-page">
                <div className="container-fluid text-center landing-content-wrapper">
                  {Locations.map((location, index) => {
                    return (
                      <LocationsCard
                        key={index}
                        name={location.name}
                        description={location.description}
                        address={location.address}
                        phone={location.phone}
                        contactPage={true}
                      />
                    );
                  })}
                </div>
              </main>
            </div>
          )}
        />
        {/* Start Menu Categories */}
        <Route
          exact
          path="/pages/mainMenu/menuCategories/handhelds.html"
          render={() => (
            <div>
              <NavBar />
              <main>
                <HeroImg img={"freestanding"} />
                <Menu
                  menuData={HandheldData}
                  backButton={true}
                  menuTitle={"Handhelds"}
                  menuSubtitle={"100% USDA CHOICE BEEF"}
                />
              </main>
            </div>
          )}
        />
        <Route
          exact
          path="/pages/catering/cateringMenu/platters.html"
          render={() => (
            <div>
              <NavBar catering={true} />
              <Menu menuData={CateringPlattersData} />
            </div>
          )}
        />

        <Route
          exact
          path="/pages/catering/cateringMenu/saladPlatters.html"
          render={() => (
            <div>
              <NavBar catering={true} />
              <Menu menuData={CateringSaladPlattersData} />
            </div>
          )}
        />
        <Route
          exact
          path="/pages/catering/cateringMenu/sidePlatters.html"
          render={() => (
            <div>
              <NavBar catering={true} />
              <Menu menuData={CateringSidePlattersData} />
            </div>
          )}
        />
        <Route
          exact
          path="/pages/catering/cateringMenu/index.html"
          render={() => (
            <div>
              <NavBar catering={true} />
              <Menu menuData={CateringCategoryData} />
            </div>
          )}
        />

        <Route
          exact
          path="/pages/mainMenu/menuCategories/largePlates.html"
          render={() => (
            <div>
              <NavBar />

              <div id="skip-link">
                <HeroImg img={"freestanding"} />
                <Menu
                  menuData={LargePlates}
                  backButton={true}
                  menuTitle={"Large Plates"}
                />
              </div>
            </div>
          )}
        />
        {/* End Menu Categories */}

        {/* Start PDP Pages */}
        {/* Routing doesn't work with this pattern because anything can be name, need to check against data */}
        <Route
          exact
          path="/pages/mainMenu/:type/:name.html"
          render={(routeProps) => (
            <div>
              <NavBar />
              <PDP data={MainMenuData} {...routeProps} />
            </div>
          )}
        />
        <Route
          exact
          path="/pages/catering/:type/:name.html"
          render={(routeProps) => (
            <div>
              <NavBar catering={true} />
              <PDP
                data={CateringPlattersData}
                {...routeProps}
                catering={true}
              />
            </div>
          )}
        />
        {/* End PDP Pages */}

        <Route
          exact
          path="/pages/mainMenu/index.html"
          render={() => (
            <div>
              <NavBar />
              <main>
                <HeroImg img={"freestanding"} />
                <Menu menuData={MenuCategoryData} backButton={false} />
              </main>
            </div>
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div>
              <NavBar />
              <HeroImg img={"ourStory"} />
              <main>
                <Menu
                  homePage={true}
                  menuData={MenuCategoryData}
                  backButton={true}
                />
                <Menu
                  homePage={true}
                  menuData={NotAMenuData}
                  backButton={false}
                />
              </main>
            </div>
          )}
        />

        <Route render={() => <h1>Error! Page not found!</h1>} />
      </Switch>
    );
  }
}

export default Routes;
