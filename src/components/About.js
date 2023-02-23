import { Link, Outlet } from "react-router-dom";
import React from "react";
import ProfileClass from "./ProfileClass";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("About - constructor");
  }

  componentDidMount() {
    // console.log("About - component did mount");
  }

  render() {
    // console.log("About - render");
    return (
      <>
        <div>
          <h1>About Us Page</h1>
          <UserContext.Consumer>
            {({ user }) => (
              <h4 className="font-bold text-xl p-10">
                {user.name} - {user.email}
              </h4>
            )}
          </UserContext.Consumer>
          <p>
            This is the Namaste React Live Course Chapter 07 - Finding the path
          </p>
          {/* <Outlet />
          <Outlet /> */}
          <ProfileClass name={"First"} />
          {/* <ProfileClass name={"Second"} /> */}
        </div>
      </>
    );
  }
}

export default About;
