import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../../firebase.init";
import { useEffect } from "react";
const auth = getAuth(app);
const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const GoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user);
        })
    })
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return {
        user,
        setUser,
        GoogleSignIn,
        handleSignOut,
    }
};

export default useFirebase;