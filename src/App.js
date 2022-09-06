import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from './firebase.init';
const auth = getAuth(app);
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/products" element={<Products></Products>} />
        <Route path="/login" element={<Login></Login>} />
        <Route
          path="/orders"
          element={
            <PrivateRoute user={user}>
              <Orders></Orders>
            </PrivateRoute>
          }
        />
        <Route path="/orders" element={<Orders></Orders>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
