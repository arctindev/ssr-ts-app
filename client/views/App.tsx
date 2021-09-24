import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePreload from "./Home/HomePreload";
import AboutPreload from "./About/AboutPreload";
import Page404Preload from "./404/Page404Preload";
import ServicesPreload from "./Services/ServicesPreload";
import Template from "../components/templates/template";
import loadable from "@loadable/component";

const About = loadable(() => import("./About/About"), {
  fallback: <Page404Preload />,
});
const Page404 = loadable(() => import("./404/Page404"), {
  fallback: <AboutPreload />,
});
const Services = loadable(() => import("./Services/Services"), {
  fallback: <ServicesPreload />,
});
const Home = loadable(() => import("./Home/Home"), {
  fallback: <HomePreload />,
});

interface MyProps {}

interface MyState {
  number: number;
}

class App extends React.Component<MyProps, MyState> {
  state = {
    number: 5,
  };

  render() {
    return (
      <Switch>
        <Route exact path="/about">
          <Template>
            <About />
          </Template>
        </Route>
        <Route exact path="/services">
          <Template>
            <Services />
          </Template>
        </Route>
        <Route
          exact
          path="/"
          render={() => (
            <Template>
              <Home number={this.state.number} />
            </Template>
          )}
        />
        <Route exact path="/404">
          <Template>
            <Page404 />
          </Template>
        </Route>
        <Route path="/">
          <Redirect to="/404" />
        </Route>
      </Switch>
    );
  }
}

export default App;
