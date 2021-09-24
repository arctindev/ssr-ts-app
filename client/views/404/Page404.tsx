import React from "react";
import { Link } from "react-router-dom";

class Page404 extends React.Component {
  render() {
    return (
      <div>
        <main>
          <h1>Page not Found</h1>
        </main>
        <nav>
          <Link to="/">Go to home Page</Link>
        </nav>
      </div>
    );
  }
}

export default Page404;
