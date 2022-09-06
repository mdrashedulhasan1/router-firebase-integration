import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <button onClick={()=> signInWithGoogle()}>GoogleSignIn</button>
        </div>
    );
};

export default Login;