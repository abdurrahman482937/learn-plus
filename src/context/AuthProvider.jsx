import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("google provider : ", result.user);
      })
      .catch((error) => console.log(error.message));
  };

  const loginWithFacebook = () => {
    setLoading(true);
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("facebook provider : ", result.user);
      })
      .catch((error) => console.log(error.message));
  };

  const loginWithGithub = () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("github provider : ", result.user);
      })
      .catch((error) => console.log(error.message));
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        console.log("User logged out");
        setUser(null);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Auth current User : ", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    user,
    loading,
    login,
    register,
    loginWithGoogle,
    loginWithGithub,
    loginWithFacebook,
    logout,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
