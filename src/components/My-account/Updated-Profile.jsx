import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';

const AccountPage = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const [user, setUser] = useState(storedUser || {});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (!storedUser) {
      navigate('/sign-in');
    }
  }, [storedUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("currentUser", JSON.stringify(user)); 
    setEditMode(false); 
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate('/sign-in');
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            {editMode ? "Edit Profile" : "Profile"}
          </Typography>
          {editMode ? (
            <>
              <TextField
                name="username"
                label="Username"
                value={user.username || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="email"
                label="Email"
                value={user.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                value={user.password}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button
                  variant="contained"
                  onClick={handleSave}
                  sx={{
                    background: "#1976d2",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  onClick={handleLogout}
                  sx={{
                    background: "#d32f2f",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Logout
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Username: {user.username}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Email: {user.email}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2 }}>
                Password: {user.password}
              </Typography>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button
                  variant="contained"
                  onClick={() => setEditMode(true)}
                  sx={{
                    background: "#1976d2",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  onClick={handleLogout}
                  sx={{
                    background: "#d32f2f",
                    color: "white",
                    borderRadius: "4px",
                  }}
                >
                  Logout
                </Button>
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AccountPage;