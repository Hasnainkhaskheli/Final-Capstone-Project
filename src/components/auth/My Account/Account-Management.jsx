import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Card, Avatar, Box , IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faTruck,
  faCommentDots,
  faRedoAlt,
  faPencilAlt,
  faShieldAlt,
  faQuestionCircle,
  faBoxOpen,
  faPhoneAlt,
  faMapMarkerAlt,
  faExchangeAlt,
  faLifeRing,
  faTools,
  faWallet,
  faBook,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SettingsIcon from "@mui/icons-material/Settings";

const AccountManagement = () => {
  return (
    <Box sx={{ backgroundColor: "#f7f7f7", minHeight: "100vh", pb: 5 , mt:5 }}>
      {/* Header Section */}
      <Box
      sx={{
        backgroundColor: "#42a5f5", // Light blue background
        height: "150px", // Adjust height as needed
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        position: "relative",
      }}
    >
      {/* User Avatar and Badge */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{
            backgroundColor: "#fff",
            color: "#42a5f5",
            width: 40,
            height: 40,
          }}
        >
          <Typography fontSize="24px">U</Typography> {/* Replace "U" with an icon if needed */}
        </Avatar>
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#ffeb3b", // Yellow background
            color: "#000",
            fontWeight: 600,
            padding: "3px 8px",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        >
          Priceoye club member
        </Typography>
      </Box>

      {/* Settings Icon */}
      <IconButton
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "#fff",
        }}
      >
        <SettingsIcon />
      </IconButton>
    </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ mt: -5 }}>
        <Grid container spacing={3}>
          {/* My Orders Section */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              My Orders
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faCreditCard} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Pay
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faTruck} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Receive
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faCommentDots} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Review
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faRedoAlt} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Refund
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faPencilAlt} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Complaints
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faShieldAlt} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Addons
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Help Section */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Help
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    FAQs
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faBoxOpen} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Open Parcel
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Contact
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Locations
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    EMI
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Services Section */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Services
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faLifeRing} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Support
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faTools} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Warranty
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faWallet} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    BNPL
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Profile Section */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Profile
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <FontAwesomeIcon icon={faBook} size="2x" />
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Address Book
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Card sx={{ textAlign: "center", py: 2 }}>
                  <Link to="/account/profile">
                    <FontAwesomeIcon icon={faPencilAlt} size="2x" />
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      Edit Profile
                    </Typography>
                  </Link>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AccountManagement;
