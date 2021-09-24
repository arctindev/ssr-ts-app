import React from "react";
import Footer from "../molecules/Footer/Footer";
import Header from "../molecules/Header/Header";

interface MyProps {
  children: React.ReactNode;
}
interface MyState {}

class Template extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
  }
  render() {
    return (
      <div className="Template">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Template;
