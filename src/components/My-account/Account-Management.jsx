
import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";
import ReplayIcon from "@mui/icons-material/Replay";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";

const Dashboard = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", padding: "16px" }}>
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#4aa3f0",
          borderRadius: "8px",
          padding: "50px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              bgcolor: "white",
              color: "#4aa3f0",
              width: 50,
              height: 50,
              fontSize: "24px",
            }}
          >
            👤
          </Avatar>
          <Button
            variant="contained"
            sx={{
              bgcolor: "yellow",
              color: "#000",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "16px",
              padding: "4px 12px",
            }}
          >
            PriceOye Club Member
          </Button>
        </Box>
        <IconButton>
          <SettingsIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>

      {/* Lower Sections */}
      <Box sx={{ marginTop: 4 }}>
        {/* My Orders */}
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "8px",
            padding: 2,
            boxShadow: 1,
            marginBottom: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: 2 }}
          >
            My Orders
          </Typography>
          <Grid container spacing={3}>
            {[
              { icon: <PaymentIcon />, label: "Pay" },
              { icon: <LocalShippingIcon />, label: "Receive" },
              { icon: <StarIcon />, label: "Review" },
              { icon: <ReplayIcon />, label: "Refund" },
              { icon: <ReportProblemIcon />, label: "Complaints" },
              { icon: <AddCircleIcon />, label: "Add-ons" },
            ].map((item, index) => (
              <Grid key={index} item xs={6} sm={4} md={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "16px",
                    border: "none",
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                  }}
                >
                  <Box sx={{ fontSize: 40, color: "#4aa3f0" }}>{item.icon}</Box>
                  <Typography>{item.label}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Help */}
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "8px",
            padding: 2,
            boxShadow: 1,
            marginBottom: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: 2 }}
          >
            Help
          </Typography>
          <Grid container spacing={3}>
            {[
              { icon: <HelpOutlineIcon />, label: "FAQs" },
              { icon: <ContactPhoneIcon />, label: "Contact" },
              { icon: <LocationOnIcon />, label: "Locations" },
            ].map((item, index) => (
              <Grid key={index} item xs={6} sm={4} md={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "16px",
                    border: "none",
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                  }}
                >
                  <Box sx={{ fontSize: 40, color: "#4aa3f0" }}>{item.icon}</Box>
                  <Typography>{item.label}</Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Profile */}
        <Box sx={{ bgcolor: "white", borderRadius: "8px", padding: 2, boxShadow: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: 2 }}
          >
            Profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4} md={2}>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                  border: "none",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                }}
              >
                <AccountCircleIcon sx={{ fontSize: 40, color: "#4aa3f0" }} />
                <Typography>Address Book</Typography>
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px",
                  border: "none",
                  boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                }}
              >
                <EditIcon sx={{ fontSize: 40, color: "#4aa3f0" }} />
                <Link
                  to="/account/Profile"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography>Edit Profile</Typography>
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
