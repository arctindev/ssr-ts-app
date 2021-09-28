/* ============================================= */
/*              1. Class Component               */
/*              2. Functional Component          */
/* ============================================= */

/* ============================================= */
/*              1. Class Component               */
/* ============================================= */

// import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import HomePreload from "./Home/HomePreload";
// import AboutPreload from "./About/AboutPreload";
// import Page404Preload from "./404/Page404Preload";
// import ServicesPreload from "./Services/ServicesPreload";
// import Template from "../components/templates/Template";
// import loadable from "@loadable/component";

// const About = loadable(
//   () => import(/* webpackChunkName: "about" */ "./About/About"),
//   {
//     fallback: <AboutPreload />,
//   }
// );
// const Page404 = loadable(
//   () => import(/* webpackChunkName: "404" */ "./404/Page404"),
//   {
//     fallback: <Page404Preload />,
//   }
// );
// const Services = loadable(
//   () => import(/* webpackChunkName: "services" */ "./Services/Services"),
//   {
//     fallback: <ServicesPreload />,
//   }
// );
// const Home = loadable(
//   () => import(/* webpackChunkName: "home" */ "./Home/Home"),
//   {
//     fallback: <HomePreload />,
//   }
// );

// interface MyProps {}

// interface MyState {
//   number: number;
// }

// class App extends React.Component<MyProps, MyState> {
//   constructor(props: MyProps) {
//     super(props);
//     this.state = {
//       number: 5,
//     };
//   }
//   render() {
//     return (
//       <Switch>
//         <Route exact path="/about">
//           <Template>
//             <About />
//           </Template>
//         </Route>
//         <Route exact path="/services">
//           <Template>
//             <Services />
//           </Template>
//         </Route>
//         <Route
//           exact
//           path="/"
//           render={() => (
//             <Template>
//               <Home number={this.state.number} />
//             </Template>
//           )}
//         />
//         <Route exact path="/404">
//           <Template>
//             <Page404 />
//           </Template>
//         </Route>
//         <Route path="/">
//           <Redirect to="/404" />
//         </Route>
//       </Switch>
//     );
//   }
// }

// export default App;

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */

import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePreload from "./Home/HomePreload";
import AboutPreload from "./About/AboutPreload";
import Page404Preload from "./404/Page404Preload";
import ServicesPreload from "./Services/ServicesPreload";
import Template from "../components/templates/Template";
import loadable from "@loadable/component";

const About = loadable(
  () => import(/* webpackChunkName: "about" */ "./About/About"),
  {
    fallback: <AboutPreload />,
  }
);
const Page404 = loadable(
  () => import(/* webpackChunkName: "404" */ "./404/Page404"),
  {
    fallback: <Page404Preload />,
  }
);
const Services = loadable(
  () => import(/* webpackChunkName: "services" */ "./Services/Services"),
  {
    fallback: <ServicesPreload />,
  }
);
const Home = loadable(
  () => import(/* webpackChunkName: "home" */ "./Home/Home"),
  {
    fallback: <HomePreload />,
  }
);

interface MyState {
  number: number;
}

const App = () => {
  const [state, setState] = useState<MyState>({ number: 5 });
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
            <Home number={state.number} />
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
};

export default App;
