/* ============================================= */
/*              1. Class Component               */
/*              2. Functional Component          */
/* ============================================= */

/* ============================================= */
/*              1. Class Component               */
/* ============================================= */

// import React from "react";
// import { Link } from "react-router-dom";

// interface MyProps {}
// interface MyState {}
// class Footer extends React.Component<MyProps, MyState> {
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

// export default Footer;

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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

export default Footer;
