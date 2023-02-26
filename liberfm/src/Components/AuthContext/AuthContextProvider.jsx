import { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {


  return (
    <AuthContext.Provider value={children}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
