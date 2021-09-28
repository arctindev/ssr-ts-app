/* ============================================= */
/*              1. Class Component               */
/*              2. Functional Component          */
/* ============================================= */

/* ============================================= */
/*              1. Class Component               */
/* ============================================= */

// import React from "react";

// interface MyProps {}
// interface MyState {}

// class Page404 extends React.Component<MyProps, MyState> {
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

// export default Page404;

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */

import React from "react";

const Page404Preload = () => {
  return (
    <div className="content__wrapper">
      <main>
        <h1>Page not Found</h1>
      </main>
    </div>
  );
};

export default Page404Preload;
