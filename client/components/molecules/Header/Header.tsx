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
// class Header extends React.Component<MyProps, MyState> {
//   render() {
//     return (
//       <header>
//         <span>Branding</span>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/services">Services</Link>
//           <Link to="/about">About</Link>
//         </nav>
//       </header>
//     );
//   }
// }

// export default Header;

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <span>Branding</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
