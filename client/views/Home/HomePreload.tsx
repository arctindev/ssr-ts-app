import React from "react";

const HomePreload = () => {
  return (
    <div className="content__wrapper">
      <main>
        <h1>This is Home page content you can counter</h1>
        <p>5</p>
      </main>
      <section>
        <button name="increment">Increment</button>
        <button name="decrement">Decrement</button>
      </section>
    </div>
  );
};

export default HomePreload;
