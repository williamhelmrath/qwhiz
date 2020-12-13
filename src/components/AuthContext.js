import React, { createContext, useContext, useState, useEffect } from "react";
import firebase from "../utils/firebase";

const AuthContext = createContext();
export default AuthContext;

const db = firebase.firestore();

export function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [uid, setUid] = useState(null);
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        let info = await db.collection("users").doc(user.uid).get();
        setUserInfo(info.data());
        setAuthenticated(true);
        setUid(user.uid);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        setAuthenticated(false);
        setUid(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        uid,
        authenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
