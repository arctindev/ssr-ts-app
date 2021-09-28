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

// class Services extends React.Component<MyProps, MyState> {
//   constructor(props: MyProps) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="content__wrapper">
//         <main>
//           <h1>This is Services Page</h1>
//         </main>
//       </div>
//     );
//   }
// }

// export default Services;

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */

const Services = () => {
  return (
    <div className="content__wrapper">
      <main>
        <h1>This is Services Page</h1>
      </main>
    </div>
  );
};

export default Services;
