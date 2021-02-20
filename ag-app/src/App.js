import { Route, Switch } from "react-router-dom";
import { MenuCategoryData } from "./assets/data/menuData/MenuCategoryData";
import { FranchiseNavItems } from "./FranchiseNavItems";
import { NotAMenuData } from "./assets/data/menuData/NotAMenuData";
import { HandheldData } from "./assets/data/menuData/HandheldData";
import { LargePlates } from "./assets/data/menuData/LargePlates";
import { CateringCategoryData } from "./assets/data/menuData/cateringMenuData/CateringCategoryData";
import { CateringPlattersData } from "./assets/data/menuData/cateringMenuData/CateringPlattersData";
import { CateringSaladPlattersData } from "./assets/data/menuData/cateringMenuData/CateringSaladPlattersData";
import { CateringSidePlattersData } from "./assets/data/menuData/cateringMenuData/CateringSidePlattersData";
import NavBar from "./NavBar";
import HeroImg from "./HeroImg";
import Menu from "./Menu";
import "./css/custom.css";
import Footer from "./Footer";
import PDP from "./PDP";

function App() {
  return (
    <div className="App">
      <Route path="/pages/mainMenu/" render={() => <NavBar />} />

      <Switch>
        <Route
          exact
          path="/pages/otherPages/franchise.html"
          render={() => <NavBar navData={FranchiseNavItems} />}
        />
        {/* <Route
          path="/pages/catering"
          render={() => (
            <div>
              <NavBar catering={true} />
            </div>
          )}
        /> */}
        <Route
          exact
          path="/pages/otherPages/pickup.html"
          render={() => <NavBar pickup={true} />}
        />

        {/* Start Menu Categories */}

        <Route
          exact
          path="/pages/mainMenu/menuCategories/handhelds.html"
          render={() => (
            <div>
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
          path="/pages/mainMenu/menuCategories/largeplates.html"
          render={() => (
            <div>
              <main>
                <HeroImg img={"freestanding"} />
                <Menu
                  menuData={LargePlates}
                  backButton={true}
                  menuTitle={"Large Plates"}
                />
              </main>
            </div>
          )}
        />
        {/* End Menu Categories */}
        {/* Start PDP Pages */}

        <Route
          exact
          path="/pages/mainMenu/handhelds/:name.html"
          render={(routeProps) => <PDP data={HandheldData} {...routeProps} />}
        />
        <Route
          exact
          path="/pages/mainMenu/largeplates/:name.html"
          render={(routeProps) => <PDP data={LargePlates} {...routeProps} />}
        />
        <Route
          exact
          path="/pages/catering/cateringMenu/:name.html"
          render={(routeProps) => (
            <PDP data={CateringPlattersData} {...routeProps} catering={true}/>
          )}
        />
        {/* End PDP Pages */}
        <Route path="/" render={() => <NavBar />} />
      </Switch>

      <Route
        exact
        path="/pages/mainMenu/index.html"
        render={() => (
          <div>
            <main>
              <HeroImg img={"freestanding"} />
              <Menu menuData={MenuCategoryData} backButton={false} />
            </main>
          </div>
        )}
      />

      {/* <HeroImg img={"ourStory"} />
      <main>
        <Menu homePage={true} menuData={MenuCategoryData} backButton={true} />
        <Menu homePage={true} menuData={NotAMenuData} backButton={false} />
      </main> */}
      <Footer />
    </div>
  );
}

export default App;
