import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../../firebase.init";
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
    return {
        user,
        setUser,
        GoogleSignIn,
    }
};

export default useFirebase;