import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";



const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="header-auth">
    <div className="auth-page" > 
    
    <p>If you are not a customer yet, then please register below</p>
      <Link to="/auth/register">
        <button className="auth-button">Register</button>
      </Link>
      <p>If you are already a customer, welcome back. Please login below!</p>
      <Link to="/auth/login">
        <button className="auth-button">Login</button>
      </Link>
      <p>Continue as guest!</p>
      <Link to="/Main">
        <button className="auth-button">Guest</button>
      </Link>
    </div>
    </div>
  );
};

export default AuthModule;