import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePreload from "./views/Home/HomePreload";
import AboutPreload from "./views/About/AboutPreload";
import Page404Preload from "./views/404/Page404Preload";
import ServicesPreload from "./views/Services/ServicesPreload";
import Template from "./components/templates/Template";
import loadable from "@loadable/component";

const About = loadable(() => import("./views/About/About"), {
  fallback: <AboutPreload />,
});
const Page404 = loadable(() => import("./views/404/Page404"), {
  fallback: <Page404Preload />,
});
const Services = loadable(() => import("./views/Services/Services"), {
  fallback: <ServicesPreload />,
});
const Home = loadable(() => import("./views/Home/Home"), {
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
