import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  render() {
    console.log(">>>check props: ", this.props);
    return <div>Hello world from homepage with James</div>;
  }
}

export default Color(Home);
