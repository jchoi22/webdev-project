import React, { useEffect, useState } from "react";
import { checkUser, createUser } from "./AuthService";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material"; //import materialUI
 //import the new css that uses materialUI

const AuthRegister = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  // useEffect that run when changes are made to the state variable flags
  useEffect(() => {
    // checkUser() ? history.push("/home"): null;
    if (newUser && add) {
      createUser(newUser).then((userCreated) => {
        if (userCreated) {
          alert(
            `${userCreated.get("firstName")}, you successfully registered!`
          );
          navigate("/");
        }
        
        setAdd(false);
      });
    }
  }, [navigate, newUser, add]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setNewUser({
      ...newUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setAdd(true);
  };

  return (
    <Box sx={{ width: 400, margin: "auto", textAlign: "center" }}>
       {/*sx is for custom styles, box is like div, */}
    
    <Typography variant="h4" component="h1" sx ={{fontFamily: "Bebas Neue"}} gutterBottom>
        Register here
    </Typography> {/*varaint is heading, gitterbottom for margin */}
   
    <AuthForm
      user={newUser}
      onChange={onChangeHandler}

      onSubmit={onSubmitHandler}
    />
    <Box mt={2} > {/*mt is margin top*/}
      <Link to="/auth/login" style={{ textDecoration: "none" }}>

        <Button variant="text" sx={{
              
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
            }}>Forgot you already registered? Login here</Button>
      </Link>
    </Box>
  
  </Box>
  );
};

export default AuthRegister;
