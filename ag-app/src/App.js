import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import HeroImg from "./HeroImg";
import Menu from "./Menu";
import "./css/custom.css";
import { HomeMenuItemsData } from "./HomeMenuItemsData";
import { NavItems } from "./NavItems";
import { FranchiseNavItems } from "./FranchiseNavItems";

function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path="/pages/otherPages/franchise.html" render={() => (
            <NavBar navData={FranchiseNavItems} />
          )} />
          <Route path="/pages/catering" render={() => (
            <NavBar navData={NavItems} catering={true} />
          )}/>
        <Route path="/" render={() => (
            <NavBar navData={NavItems} />
          )} />
          <Route exact path="/pickup.html" render={() => (
            <NavBar navData={NavItems} catering={true} />
          )} />
        </Switch>
        <Route
          exact path="/pages/menu/index.html"
          render={() => (
            <div>
              <main>
                <HeroImg img={"freestanding"} />
                <Menu menuPage={true} menuData={HomeMenuItemsData} />
              </main>
            </div>
          )}
        />

      <HeroImg
        img={"ourStory"}
      />
      <main>
        <Menu menuPage={true} menuData={HomeMenuItemsData}/>
      </main>
    </div>
  );
}

export default App;