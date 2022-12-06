import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProbider = ({children}) => {

    const [user, setUser] =useState(null);
    const [loading, setLoading] = useState(true)

    const providerGoogleLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const providerGitLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser =(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn =(email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            console.log('user', currentUser);
            
            // if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            // }
            setLoading(false);
        });

        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user, loading, providerGoogleLogin, providerGitLogin, createUser, signIn, logout}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProbider;