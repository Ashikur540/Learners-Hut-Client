import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut,
    updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.init';



// careate context
export const AuthContext = createContext(app);

const AuthProvider = ({ children }) => {
    // hooks
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // auth
    const auth = getAuth();
    const Gglprovider = new GoogleAuthProvider();
    // functions..................................

    const UserSignUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const UserSignIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const UserSignOut = () => {
        setLoader(true);
        return signOut(auth);
    }
    const updateUserProfile = (profile) => {
        setLoader(true);
        return updateProfile(auth.currentUser, profile);
    }

    const googleSignin = (Gglprovider) => {
        setLoader(true);
        return signInWithPopup(auth, Gglprovider);
    }

    const resetUserPassword = (email) => {
        setLoader(true);
        return sendPasswordResetEmail(auth, email);
    }

    // const userInfo = {
    //     displayName: "Ashik"
    // }


    useEffect(() => {
        const unmount = onAuthStateChanged(auth, currentUser => {
            console.log("state changed", currentUser);
            setUser(currentUser);
            setLoader(false);
        })

        return () => {
            unmount();
        }
    }, [])
    const authInfo = {
        user,
        // userInfo,
        setUser,
        loader,
        setLoader,
        UserSignUp,
        UserSignIn,
        UserSignOut,
        updateUserProfile,
        googleSignin,
        resetUserPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;