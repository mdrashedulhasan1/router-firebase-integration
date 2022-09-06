import React from 'react';
import useFirebase from '../hook/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>This is Home page</h1>
            <p>Current User is: {user? user.displayName: 'no body'}</p>
        </div>
    );
};

export default Home;