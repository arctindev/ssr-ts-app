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

// export class Page404 extends Component<MyProps, MyState> {
//   render() {
//     return (
//       <div className="content__wrapper">
//         <main>
//           <h1>Page not Found</h1>
//         </main>
//       </div>
//     );
//   }
// }

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */

import React from 'react';

const Page404 = () => {
  return (
    <div className="content__wrapper">
      <main>
        <h1>Page not Found</h1>
      </main>
    </div>
  );
};

export default Page404;
