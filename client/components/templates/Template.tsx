/* ============================================= */
/*              1. Class Component               */
/*              2. Functional Component          */
/* ============================================= */

/* ============================================= */
/*              1. Class Component               */
/* ============================================= */

// import React from "react";
// import Footer from "../molecules/Footer/Footer";
// import Header from "../molecules/Header/Header";

// interface MyProps {
//   children: React.ReactNode;
// }
// interface MyState {}

// class Template extends React.Component<MyProps, MyState> {
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

// export default Template;

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */

import React from "react";
import Footer from "../molecules/Footer/Footer";
import Header from "../molecules/Header/Header";

interface MyProps {
  children: React.ReactNode;
}
const Template = ({ children }: MyProps) => {
  return (
    <div className="template">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Template;
