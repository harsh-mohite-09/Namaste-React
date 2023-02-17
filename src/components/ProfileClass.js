import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // create state over hear
    this.state = {
      userInfo: "Waiting for user information",
    };
    console.log(`Profile - constructor - ${this.props.name}`);
  }

  async componentDidMount() {
    // Best place to make an API call
    const data = await fetch("https://api.github.com/users/harsh-mohite-09");
    const json = await data.json();
    const username = json.name;
    this.setState({
      userInfo: username,
    });
    console.log(
      `Profile - component did mount - ${this.props.name} , ${username}, ${this.state.userInfo}`
    );
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  render() {
    console.log(
      `Profile - render - ${this.props.name} , ,  ${this.state.userInfo} `
    );
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Username: {this.state.userInfo}</h2>
      </div>
    );
  }
}

export default ProfileClass;
