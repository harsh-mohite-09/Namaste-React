import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy.name009@gmail.com",
  },
});

UserContext.displayName = "MainContext";

export default UserContext;
