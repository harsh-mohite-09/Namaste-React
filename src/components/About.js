import { Link, Outlet } from "react-router-dom";
import React from "react";
import ProfileClass from "./ProfileClass";

// const About = () => {
//   return (
//     <>
//       <div>
//         <h1>About Us Page</h1>
//         <p>
//           This is the Namaste React Live Course Chapter 07 - Finding the path
//         </p>
//         <Outlet />
//       </div>
//     </>
//   );
// };

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
