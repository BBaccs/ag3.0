import { Route, Switch } from "react-router-dom";
import { MenuCategoryData } from "./MenuCategoryData";
import { FranchiseNavItems } from "./FranchiseNavItems";
import NavBar from "./NavBar";
import HeroImg from "./HeroImg";
import Menu from "./Menu";
import "./css/custom.css";
import Footer from "./Footer";

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
        <Route path="/" render={() => <NavBar />} />
      </Switch>

      <Route
        exact
        path="/pages/menu/index.html"
        render={() => (
          <div>
            <main>
              <HeroImg img={"freestanding"} />
              <Menu menuPage={true} menuData={MenuCategoryData} />
            </main>
          </div>
        )}
      />

      <HeroImg img={"ourStory"} />
      <main>
        <Menu menuPage={true} menuData={MenuCategoryData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
