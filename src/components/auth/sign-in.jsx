import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography, Card, CardContent, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [avatarUrl, setAvatarUrl] = useState("");

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === data.email && u.password === data.password);

    if (user) {
      alert("Login Successful!");
      localStorage.setItem("currentUser", JSON.stringify(user));
      setAvatarUrl(user.avatar || "https://www.gravatar.com/avatar/?d=identicon");
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", padding: 2 }}>
      <Card sx={{ width: "100%", maxWidth: 400, padding: 3 }}>
        <CardContent>
          <Typography variant="h4" textAlign="center" sx={{ marginBottom: 2 }}> Login </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register("email", { required: "Email is required" })} placeholder="Email" fullWidth margin="normal" sx={{ marginBottom: 2 }} />
            <TextField {...register("password", { required: "Password is required" })} type="password" placeholder="Password" fullWidth margin="normal" sx={{ marginBottom: 2 }} />
            <Button type="submit" variant="contained" fullWidth sx={{ padding: "10px", background: "#1976d2", color: "white", borderRadius: "4px" }}> Login </Button>
          </form>
          {avatarUrl && <Avatar src={avatarUrl} sx={{ width: 50, height: 50, margin: "20px auto", display: "block" }} />}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
