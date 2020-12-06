import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import Spinner from "../components/Loading/Spinner";
import firebaseApp from "../firebase/firebase";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
    firebaseApp.auth().onAuthStateChanged(async (user) => {
      const data = await user;
      setCurrentUser(data)
      setLoad(false)
      // etc.
    });
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{load ? <Spinner /> : children}</AuthContext.Provider>;
}
