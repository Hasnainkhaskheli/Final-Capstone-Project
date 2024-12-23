import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const [user, setUser] = useState(storedUser || {});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Check if user is logged in, otherwise navigate to login page
    if (!storedUser) {
      navigate("/login");
    }
  }, [storedUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    setEditMode(false);
    alert("Details updated successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // Clear user from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {storedUser ? (
        <>
          <Typography variant="h4" textAlign="center">
            Account Details
          </Typography>
          <TextField
            label="Username"
            name="username"
            value={user.username}
            disabled={!editMode}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            value={user.email}
            disabled={!editMode}
            onChange={handleChange}
          />
          {editMode ? (
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button variant="contained" onClick={() => setEditMode(true)}>
              Edit
            </Button>
          )}
          <Button variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h4" textAlign="center">
            Please log in or register to access your account
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            sx={{ marginBottom: 2 }}
          >
            Login
          </Button>
          <Button variant="outlined" onClick={() => navigate("/register")}>
            Register
          </Button>
        </>
      )}
    </Box>
  );
};

export default AccountPage;
