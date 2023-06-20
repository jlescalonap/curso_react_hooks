import { useState } from "react";
import { UserContext } from "./UserContext";

/* const user = {
    id: 32144,
    name: "Jose Luis Escalona",
    email: "jlescalonap@gmail.com"
} */

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState()

  return (
    // <UserContext.Provider value={{ hola: "Mundo", user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};