import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Harsh Mohite",
    email: "harsh.mohite009@gmail.com",
  },
});

export default UserContext;
