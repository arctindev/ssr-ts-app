/* ============================================= */
/*              1. Class Component               */
/*              2. Functional Component          */
/* ============================================= */

/* ============================================= */
/*              1. Class Component               */
/* ============================================= */

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// interface MyProps {}
// interface MyState {}
// export class Footer extends Component<MyProps, MyState> {
//   render() {
//     return (
//       <footer>
//         <span>Branding</span>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/services">Services</Link>
//           <Link to="/about">About</Link>
//         </nav>
//       </footer>
//     );
//   }
// }

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */

import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <span>Branding</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </nav>
    </footer>
  );
};
