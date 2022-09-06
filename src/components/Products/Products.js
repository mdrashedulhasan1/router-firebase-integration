import React from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Knock Knock...</h1>
            <h5>{user?user.displayName:'voot'}</h5>
        </div>
    );
};

export default Products;