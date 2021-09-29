/* ============================================= */
/*              1. Class Component               */
/*              2. Functional Component          */
/* ============================================= */

/* ============================================= */
/*              1. Class Component               */
/* ============================================= */

// import React, { Component } from "react";

// interface MyProps {}
// interface MyState {}
//
// export class About extends Component<MyProps, MyState> {
//   constructor(props: MyProps) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="content__wrapper">
//         <main>
//           <h1>This is About Page</h1>
//         </main>
//       </div>
//     );
//   }
// }

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */

import React from "react";

const About = () => {
  return (
    <div className="content__wrapper">
      <main>
        <h1>This is About Page</h1>
      </main>
    </div>
  );
};

export default About;
