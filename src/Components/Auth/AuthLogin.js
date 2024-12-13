import React, { useEffect, useState } from "react";
import { checkUser, loginUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";




const AuthLogin = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    if (currentUser && add) {
      loginUser(currentUser).then((userLoggedIn) => {
        if (userLoggedIn) {
          const email = userLoggedIn.get("email");
          alert(`${userLoggedIn.get("firstName")}, you successfully logged in!`);
          if (email.endsWith("@employee.com")) {
            navigate("/EmployeeDash");
          } else {
            navigate("/");
          }
        }
        setAdd(false);
      });
    }
  }, [navigate, currentUser, add]);
  

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setCurrentUser({
      ...currentUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", textAlign: "center" }}>
      
      <Typography variant="h4" component="h1" sx ={{fontFamily: "Bebas Neue"}} gutterBottom>
          LOGIN HERE
      </Typography>

      <AuthForm
        user={currentUser}
        isLogin={true}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />

      <Box mt={2}>
        <Link to="/auth/register" style={{ textDecoration: "none" }}> {/*Get rid of underline in link */}

          <Button variant="text" 
             sx={{
              
              //border: "5px solid rgb(106, 144, 205)",
              fontFamily: '"Bebas Neue", sans-serif',
              borderRadius: "5px",
              color: "rgb(238, 139, 204)",
              backgroundColor: "#106e4d",
              padding: "10px 30px",
              cursor: "pointer",
              margin: "10px",
              fontSize: "large",
              "&:hover": {
                backgroundColor: "#aed5c8", // on hover background change
              }
            }} className="custom-button">Not a user? Need to Register?</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default AuthLogin;