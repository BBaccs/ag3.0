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
import { MainMenuData } from "./assets/data/menuData/MainMenuData";
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
        <Route path="/pages/mainMenu/" render={() => <NavBar />} />
        <Route
          path="/pages/catering/"
          render={() => <NavBar catering={true} />}
        />
        <Route
          exact
          path="/pages/otherPages/franchise.html"
          render={() => <NavBar navData={FranchiseNavItems} />}
        />
        <Route
          exact
          path="/pages/otherPages/pickup.html"
          render={() => <NavBar pickup={true} />}
        />
        <Route path="/" render={() => <NavBar />} />
      </Switch>

      <Switch>
        {/* Start Menu Categories */}
{/* 
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
        /> */}
        <Route
          exact
          path="/pages/catering/cateringMenu/platters.html"
          render={() => (
            <div>
              <Menu menuData={CateringPlattersData} />
            </div>
          )}
        />

        <Route
          exact
          path="/pages/catering/cateringMenu/saladPlatters.html"
          render={() => <Menu menuData={CateringSaladPlattersData} />}
        />
        <Route
          exact
          path="/pages/catering/cateringMenu/sidePlatters.html"
          render={() => <Menu menuData={CateringSidePlattersData} />}
        />
        <Route
          exact
          path="/pages/catering/cateringMenu/index.html"
          render={() => <Menu menuData={CateringCategoryData} />}
        />

        <Route
          exact
          path="/pages/mainMenu/menuCategories/:type.html"
          render={(routeProps) => (
            <div id="skip-link">
                <Menu
                  {...routeProps} 
                  menuData={MainMenuData}
                  backButton={true}
                  menuTitle={"Large Plates"}
                />
            </div>
          )}
        />
        {/* End Menu Categories */}
        {/* Start PDP Pages */}
        <Route
          exact
          path="/pages/mainMenu/:type/:name.html"
          render={(routeProps) => <PDP data={MainMenuData} {...routeProps} />}
        />
        <Route
          exact
          path="/pages/catering/:type/:name.html"
          render={(routeProps) => (
            <PDP data={CateringPlattersData} {...routeProps} catering={true} />
          )}
        />
        {/* End PDP Pages */}
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

      <Route
        exact
        path="/"
        render={() => (
          <div>
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
      
{/* OTHER PAGES */}
      <Route
        exact
        path="/pages/otherPages/ourStory.html"
        render={() => (
          <div>
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
            <h2>CAREERS</h2>
          </div>
        )}
      />
      <Route
        exact
        path="/pages/otherPages/franchise.html"
        render={() => (
          <div>
            <h2>FRANCHISE</h2>
          </div>
        )}
      />
      <Route
        exact
        path="/pages/otherPages/pickup.html"
        render={() => (
          <div>
            <h2>LOACTIONS</h2>
          </div>
        )}
      />
      <Route
        exact
        path="/pages/otherPages/contact.html"
        render={() => (
          <div>
            <h2>CONTACT</h2>
          </div>
        )}
      />

      <Footer />
    </div>
  );
}

export default App;
