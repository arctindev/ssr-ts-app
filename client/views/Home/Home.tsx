import React from "react";
import styles from "./Home.module.css";

interface MyProps {
  number: number;
}
interface MyState {
  counter: number;
}

class Home extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: this.props.number,
    };
  }

  handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.target as HTMLButtonElement;

    if (button.name === "increment") {
      this.setState({ counter: this.state.counter + 1 });
    } else if (button.name === "decrement") {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      throw `Button don't have a name value`;
    }
  }

  render() {
    return (
      <div className={styles.Content}>
        <main>
          <h1>This is Home page content you can counter</h1>
          <p>{this.state.counter}</p>
        </main>
        <section>
          <button name="increment" onClick={this.handleClick}>
            Increment
          </button>
          <button name="decrement" onClick={this.handleClick}>
            Decrement
          </button>
        </section>
      </div>
    );
  }
}

export default Home;
