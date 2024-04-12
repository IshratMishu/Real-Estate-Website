import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';


export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null);
console.log(user);


// create user
const createUser = (email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
}


// sign in user
const signInUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

// Google Login
const googleLogin =()=>{
return signInWithPopup(auth, googleProvider)
}

// Github login
const githubLogin = ()=>{
    return signInWithPopup(auth, githubProvider)
}

// logout
const logOut = ()=>{
    setUser(null);
    return signOut(auth)
}

// update user profile
const profileUpdate =(name, photo)=>{
    return updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photo
      })
}

// Observer
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } 
      });
},[])

const authInfo ={
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logOut,
    user,
    profileUpdate
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}