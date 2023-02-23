import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="text-center">
      <h4>Footer</h4>
      <h5>
        This is is developed by {user.name} - {user.email}
      </h5>
    </div>
  );
};

export default Footer;
