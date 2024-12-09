import React from "react";
import { useNavigate } from "react-router-dom";
import Parse from "parse";

const ProtectedRoute = ({ element: Component, requiredDomain, ...rest }) => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/auth");
  };

  const user = Parse.User.current();
  if (user?.authenticated) {
    const email = user.get("email");
    if (requiredDomain && email.endsWith(requiredDomain)) {
      return <Component />;
    } else if (!requiredDomain) {
      return <Component />;
    } else {
      return (
        <div>
          <p>Unauthorized! Only users authroized employees can access this page.</p>
          <button onClick={goBackHandler}>Go Back</button>
        </div>
      );
    }
  } else {
    return (
      <div>
        <p>Unauthorized! Please log in first.</p>
        <button onClick={goBackHandler}>Go Back</button>
      </div>
    );
  }
};

export default ProtectedRoute;
