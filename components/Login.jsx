import {
  Button,
  Card,
  CardContent,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    const emails = localStorage.getItem("email");
    const passwords = localStorage.getItem("password");

    if (emails === "arbaz@gmail.com" && passwords === "12345") {
      navigate("/");
    } else {
      navigate("/login");
      setError("Please check your Password");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 4000);
  }, [error]);

  return (
    <div className="content-login" style={{ height: "68vh" }}>
      <Grid container spacing={2} align="center">
        <Grid item xs={8}>
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/84/55/29/1000_F_384552930_zPoe9zgmCF7qgt8fqSedcyJ6C6Ye3dFs.jpg"
            alt=""
            height={412}
            width="100%"
          />
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ marginTop: "20px", height: "350px" }}>
            <CardContent>
              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={12}>
                  <center>
                    <Typography variant="h5">Employee Login</Typography>
                  </center>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email-Id"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    label="Password"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button onClick={handleLogin} variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <span style={{ color: "red" }}>{error}</span>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
