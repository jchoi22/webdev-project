import React from "react";
import { TextField, Button, Grid2 } from "@mui/material"; //import MaterialUI

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <Grid2 container spacing={2} sx={{ maxWidth: 400, margin: "auto", textAlign: "center" }}>
    {!isLogin && (
    <>
    <Grid2 container spacing={2}>
        <Grid2 item xs={12}>
          <TextField
            sx={{ width: 400 }}
            fullWidth
            label="First Name"
            type = "firstName"
            variant="outlined"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            
            required
          />
          </Grid2>
          <Grid2 item xs={12}>
          <TextField sx={{ width: 400 }}
            fullWidth
            label="Last Name"
            type="lastName"
            variant="outlined"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            
            required
          />
          </Grid2>
          </Grid2>
        </>
    )}
    <Grid2 container spacing={2} mt={2}>
        <Grid2 item xs={12}>
          <TextField sx={{ width: 400 }}
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={user.email}
            onChange={onChange}
            name="email"
            
            required
          />
          </Grid2>
          <Grid2 item xs={12}>
          <TextField sx={{ width: 400 }}
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={user.password}
            onChange={onChange}
            name="password"
            required
          />
        </Grid2>
        </Grid2>

        <Grid2 item xs={12}>
          <Button type="submit" variant="contained" fullWidth sx={{
              
              border: "1px solid rgb(106, 144, 205)",
              fontFamily: '"Bebas Neue", sans-serif',
              borderRadius: "5px",
              color: "rgb(238, 139, 204)",
              backgroundColor: "rgb(106, 144, 205)",
              
              cursor: "pointer",
              margin: "10px",
              
              "&:hover": {
                backgroundColor: "#aed5c8", // On hover background change
              }
            }}>
            Submit
          </Button>
          </Grid2>
    </Grid2>
  </form>
  );
};

export default AuthForm;