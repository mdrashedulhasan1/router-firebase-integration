import React from 'react';
import useFirebase from '../hook/useFirebase';

const Login = () => {
    const {GoogleSignIn} = useFirebase();
    return (
        <div>
            <button onClick={GoogleSignIn}>GoogleSignIn</button>
        </div>
    );
};

export default Login;