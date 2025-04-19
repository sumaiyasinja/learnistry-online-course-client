
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserWithEmail = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPasword = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut=()=>{
        setLoading(true)
        signOut(auth)   
     }
    
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
        console.log(currentUser)
        setLoading(false)
        //  const userEmail = currentUser?.email || user?.email;
            // const loggedUser = { email: userEmail };
            if (currentUser) {
                // axios.post('https://b8a11-server-side-iota.vercel.app/jwt', loggedUser, { withCredentials: true })
                //     .then(res => {
                //         console.log('token response', res.data);
                //     })
            }
        

        })
            return () => {
            unsubscribe()
        }
    },[])    

    const authProps= {
        user,
        loading,
        createUserWithEmail,
        loginWithEmailAndPasword,
        loginWithGoogle,
        logOut,

    }

    
    return (
        <AuthContext.Provider value={authProps}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;