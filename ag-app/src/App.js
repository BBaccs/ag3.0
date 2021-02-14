import { Route, Switch } from "react-router-dom";
import { MenuCategoryData } from "./assets/data/menuData/MenuCategoryData";
import { FranchiseNavItems } from "./FranchiseNavItems";
import { NotAMenuData } from "./assets/data/menuData/NotAMenuData";
import { HandheldData } from "./assets/data/menuData/HandheldData";
import { LargePlates } from "./assets/data/menuData/LargePlates";
import NavBar from "./NavBar";
import HeroImg from "./HeroImg";
import Menu from "./Menu";
import "./css/custom.css";
import Footer from "./Footer";
import PDP from "./PDP";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/pages/otherPages/franchise.html"
          render={() => <NavBar navData={FranchiseNavItems} />}
        />
        <Route
          path="/pages/catering"
          render={() => <NavBar catering={true} />}
        />
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
        {/* <Route
          exact
          path={`/pages/mainMenu/menuCategories/${pdpMenuItem}.html`}
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
        /> */}

        {/* Start PDP Pages */}

        <Route
          exact
          path="/pages/menu/handhelds/:name.html"
          render={(routeProps) => <PDP data={HandheldData} {...routeProps} />}
        />
        <Route
          exact
          path="/pages/menu/largeplates/:name.html"
          render={(routeProps) => <PDP data={LargePlates} {...routeProps} />}
        />
        {/* End PDP Pages */}
        <Route path="/" render={() => <NavBar />} />
      </Switch>

      <Route
        exact
        path="/pages/menu/index.html"
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
