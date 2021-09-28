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
// class About extends React.Component<MyProps, MyState> {
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

// export default About;

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */


const AboutPreload = () => {
  return (
    <div className="content__wrapper">
      <main>
        <h1>This is About Page</h1>
      </main>
    </div>
  );
};

export default AboutPreload;
