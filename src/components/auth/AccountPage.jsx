import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const AccountPage = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser || {});
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEditMode(false);
    alert("Details updated successfully!");
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
      <Typography variant="h4" textAlign="center">Account Details</Typography>
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
    </Box>
  );
};

export default AccountPage;
