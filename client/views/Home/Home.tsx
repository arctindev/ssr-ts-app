/* ============================================= */
/*              1. Class Component               */
/*              2. Functional Component          */
/* ============================================= */

/* ============================================= */
/*              1. Class Component               */
/* ============================================= */

// import React from "react";

// interface MyProps {
//   number: number;
// }
// interface MyState {
//   counter: number;
// }

// class Home extends React.Component<MyProps, MyState> {
//   constructor(props: MyProps) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       counter: this.props.number,
//     };
//   }

//   handleClick(event: React.MouseEvent<HTMLButtonElement>) {
//     const button = event.target as HTMLButtonElement;

//     if (button.name === "increment") {
//       this.setState({ counter: this.state.counter + 1 });
//     } else if (button.name === "decrement") {
//       this.setState({ counter: this.state.counter - 1 });
//     } else {
//       throw `Button don't have a name value`;
//     }
//   }

//   render() {
//     return (
//       <div className="content__wrapper">
//         <main>
//           <h1>This is nice class Home page content you can counter</h1>
//           <p>{this.state.counter}</p>
//         </main>
//         <section>
//           <button name="increment" onClick={this.handleClick}>
//             Increment
//           </button>
//           <button name="decrement" onClick={this.handleClick}>
//             Decrement
//           </button>
//         </section>
//       </div>
//     );
//   }
// }

// export default Home;

/* ============================================= */
/*              2. Functional Component          */
/* ============================================= */

import { useState } from "react";

interface MyProps {
  number: number;
}

const Home = ({ number }: MyProps) => {
  const [state, setState] = useState(number);

  const handleClick = (event: React.MouseEvent) => {
    const button = event.target as HTMLButtonElement;

    if (button.name === "increment") {
      setState(state + 1);
    } else if (button.name === "decrement") {
      setState(state - 1);
    } else {
      throw `Button don't have a name value`;
    }
  };
  return (
    <div className="content__wrapper">
      <main>
        <h1>This is very nice functional Home page content you can counter</h1>
        <p>{state}</p>
      </main>
      <section>
        <button className="secretButton" name="increment" onClick={handleClick}>
          Increment
        </button>
        <button name="decrement" onClick={handleClick}>
          Decrement
        </button>
      </section>
    </div>
  );
};

export default Home;
