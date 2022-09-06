import React from "react";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = () => {
    console.log(">>>> check data input:", this.state);
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label> <br />
          <input
            type="text"
            id="fname"
            value={this.state.firstName}
            onChange={(event) => {
              this.handleChangeFirstName(event);
            }}
          />
          <br />
          <label htmlFor="lname">Last name:</label> <br />
          <input
            type="text"
            id="lname"
            value={this.state.lastName}
            onChange={(event) => {
              this.handleChangeLastName(event);
            }}
          />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={() => this.handleSubmit()}
          />
        </form>
      </>
    );
  }
}

export default MyComponent;
