import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import firebaseApp from "../firebase/firebase";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setCurrentUser);
  }, []);
  console.log(currentUser);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
}
