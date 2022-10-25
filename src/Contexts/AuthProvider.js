import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.init';


// careate context
export const AuthContext = createContext(app);

const AuthProvider = ({ children }) => {
    // hooks
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true);

    // auth
    const auth = getAuth();

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

    // const userInfo = {
    //     displayName: "Ashik"
    // }


    useEffect(() => {
        const unmount = onAuthStateChanged(auth, currentUser => {
            console.log("state changed", currentUser);
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
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;