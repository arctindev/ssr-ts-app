import React from "react";
import Footer from "../components/molecules/Footer/Footer";
import Header from "../components/molecules/Header/Header";

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
