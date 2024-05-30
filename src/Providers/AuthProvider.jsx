import toast from "react-hot-toast";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create user
  const createUser = (email, password) => {
    setLoading(true);
    toast.success("User registered");
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    toast.success("Logged in Successfully");
    return signInWithEmailAndPassword(auth, email, password);
  };
  // update user
  const updateUserProfile = (name, image) => {
    toast.success("User updated");
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  // google sign in
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //github sign in
  const githubLogin = () => {
    setLoading(true);

    return signInWithPopup(auth, githubProvider);
  };
  // logout
  const logout = () => {
    setUser(null);
    signOut(auth);
    setLoading(false);
    toast.success(" User Logged out");
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      // if (user) {
      //   setUser(user);
      //   setLoading(false);
      // }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    createUser,
    user,
    googleLogin,
    githubLogin,
    updateUserProfile,
    logout,
    signInUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
