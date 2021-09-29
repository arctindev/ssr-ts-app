/* ============================================= */
/*              1. Class Component               */
/*              2. Functional Component          */
/* ============================================= */

/* ============================================= */
/*              1. Class Component               */
/* ============================================= */

// import React, { Component } from "react";
// import Footer from "../molecules/Footer/Footer";
// import Header from "../molecules/Header/Header";

// interface MyProps {
//   children: React.ReactNode;
// }
// interface MyState {}

// export class Template extends Component<MyProps, MyState> {
//   constructor(props: MyProps) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="template">
//         <Header />
//         {this.props.children}
//         <Footer />
//       </div>
//     );
//   }
// }

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */

import React from "react";
import { Footer } from "../molecules/Footer/Footer";
import { Header } from "../molecules/Header/Header";

interface MyProps {
  children: React.ReactNode;
}
export const Template = ({ children }: MyProps) => {
  return (
    <div className="template">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
