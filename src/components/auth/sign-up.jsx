import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Typography, TextField, Button } from "@mui/material";
import headerImage from "../../assets/login-header-img.svg";

const Register = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successful!");
    navigate("/sign-in"); // Navigate to sign-in page after registration
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <Card sx={{ width: "100%", maxWidth: 400, padding: 3 }}>
        <CardContent>
          <img src={headerImage} alt="Register" style={{ width: "100%", marginBottom: 20 }} />
          <Typography variant="h4" textAlign="center" sx={{ marginBottom: 2 }}>
            Register
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Username"
              fullWidth
              sx={{ marginBottom: 2 }}
              {...register("username", { required: "Username is required" })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              label="Email"
              fullWidth
              sx={{ marginBottom: 2 }}
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/, message: "Invalid email address" },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              sx={{ marginBottom: 2 }}
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              sx={{ marginBottom: 2 }}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
            <Button type="submit" variant="contained" fullWidth>
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;