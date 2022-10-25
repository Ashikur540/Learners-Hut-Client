import React, { createContext, useState } from 'react';
import { app } from '../Firebase/Firebase.init';

// careate context
const AuthContext = createContext(app);

const AuthProvider = ({ children }) => {
    // hooks
    const [user, setUser] = useState();


    const userInfo = {
        displayName: "Ashik"
    }

    const authInfo = {
        userInfo
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;