
import React from 'react';
import {Link} from 'react-router-dom';
import app from '../../firebase.init';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
const auth = getAuth(app);
const Navbar = () => {
    const [user] = useAuthState(auth);
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/orders">Orders</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.uid?
                <button onClick={()=>signOut(auth)}>SignOut</button>
                :
                <Link to="/login">Login</Link>
            }
            <Link to="/register">Register</Link>
        </nav>
    );
};

export default Navbar;