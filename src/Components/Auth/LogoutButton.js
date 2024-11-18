import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "./AuthService";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logoutUser();
    if (success) {
      navigate("/auth"); // Redirect to login after logout
    }
  };

  return <button className="logout-button" onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;