import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,
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
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const UserSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const UserSignOut = () => {
        return signOut(auth);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const googleSignin = (Gglprovider) => {
        return signInWithPopup(auth, Gglprovider);
    }

    // const userInfo = {
    //     displayName: "Ashik"
    // }


    useEffect(() => {
        const unmount = onAuthStateChanged(auth, currentUser => {
            console.log("state changed", currentUser);
            setUser(currentUser)
        })

        return () => {
            unmount();
        }
    }, [])
    const authInfo = {
        user,
        // userInfo,
        setUser,
        UserSignUp,
        UserSignIn,
        UserSignOut,
        updateUserProfile,
        googleSignin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;