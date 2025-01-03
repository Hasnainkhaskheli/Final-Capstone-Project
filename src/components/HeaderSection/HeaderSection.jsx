import React, { useState, useEffect, useContext } from 'react';
import { OrderContext } from '../order/OrderContext';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Button, Typography, Drawer, List, ListItem, ListItemText, Collapse, IconButton, ListItemIcon, Divider } from "@mui/material";
import { ExpandLess, ExpandMore, Close, Menu as MenuIcon } from "@mui/icons-material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WatchIcon from "@mui/icons-material/Watch";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import MicIcon from "@mui/icons-material/Mic";
import logo from "../../assets/logo.png";

const popularLists = [
  { name: 'Best Smart Watches' },
  { name: 'Best Smart Watches under 5000' },
  { name: 'Best Smart Watches for Women' },
  { name: 'Best Watches Under 8000' },
  { name: 'Best Watches Under 13000' },
];

const drawerCategories = [
  {
    name: "Mobiles",
    icon: <PhoneIphoneIcon />,
    subcategories: ["Apple", "Samsung", "Xiaomi", "Infinix", "Oppo", "Vivo", "Realme"],
  },
  {
    name: "Smart Watches",
    icon: <WatchIcon />,
    subcategories: ["Apple Watch", "Samsung Watch", "Xiaomi Mi Band", "Faster", "Yolo"],
  },
  {
    name: "Wireless Earbuds",
    icon: <HeadphonesIcon />,
    subcategories: ["AirPods", "Galaxy Buds", "Redmi Buds"],
  },
  {
    name: "Power Banks",
    icon: <BatteryChargingFullIcon />,
    subcategories: ["Anker", "Xiaomi", "Baseus"],
  },
];

const MainNavigation = () => {
  return (
    <Box className="sb-nav-box sb-row" sx={{ padding: 0 }}>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 2,
          marginLeft: 2,
          fontFamily: 'Arial, sans-serif',
          color: 'gray',
        }}
      >
        MAIN NAVIGATION
      </Typography>
      <List sx={{ padding: 0 }}>
        <ListItem>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem>
          <ListItemText primary="FAQs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Privacy Policy" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Terms & Conditions" />
        </ListItem>
      </List>
    </Box>
  );
};

const NavigationLinks = () => {
  const { orders } = useContext(OrderContext);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2 }}>
      {/* Track My Order Section */}
      <Link to="/order-tracking" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <LocationOnOutlinedIcon
            sx={{
              fontSize: 22,
              marginRight: 1,
              color: "white",
              outline: "none",
            }}
          />
          <Typography variant="body2" sx={{ color: 'white' }}>
            Track My Order
          </Typography>
        </Box>
      </Link>
      {orders.length > 0 && (
        <Box>
          <Typography variant="h6" sx={{ marginTop: 2, color: "white" }}>
            My Orders
          </Typography>
          <ul style={{ paddingLeft: "20px", color: "white" }}>
            {orders.map((order, index) => (
              <li key={index}>
                {order.product.name} - {order.formData.name} - {order.status}
              </li>
            ))}
          </ul>
        </Box>
      )}

      {/* Other Links */}
      <Link
        to="/launch-complaint"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "white",
          fontSize: "0.9rem",
        }}
      >
        <DvrOutlinedIcon sx={{ fontSize: 22, marginRight: 1, color: "white" }} />
        <Typography variant="body2">Launch a Complaint</Typography>
      </Link>
    </Box>
  );
};


export default function CustomAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUsername(currentUser.username);
    }
  }, []);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleCategoryClick = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUsername(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#4da6ff" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left side menu and logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/">
              <img src={logo} alt="Logo" style={{ width: "250px", maxWidth: "120px" }} />
            </Link>
          </Box>

          {/* Search Input and Mic Icon */}
          <Box sx={{ flexGrow: 1, position: 'relative', maxWidth: '500px', width: '100%' }}>
            <input
              type="text"
              placeholder="Search.."
              style={{
                width: '100%',
                padding: '8px 40px 8px 10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                outline: 'none',
                fontSize: '1rem',
              }}
            />
            <MicIcon
              sx={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgb(72,175,255)',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            />
          </Box>

          <Box>
            {username ? (
              <>
                <span>{username}</span> {/* Display the username */}
                <Link to="/account" style={{ textDecoration: "none", marginLeft: "10px" }}>
                  <Button variant="outlined" sx={{
                    color: "#4da6ff",
                    backgroundColor: "white",
                    borderColor: "white",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "white",
                      borderColor: "white",
                    },
                  }}>
                    My Account</Button>
                </Link>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#4da6ff",
                    backgroundColor: "white",
                    borderColor: "white",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "white",
                      borderColor: "white",
                    },
                    marginLeft: "10px"
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/sign-in" style={{ textDecoration: "none", marginRight: "10px" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#4da6ff",
                      backgroundColor: "white",
                      borderColor: "white",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "white",
                        borderColor: "white",
                      },
                    }}
                  >
                    Log in
                  </Button>
                </Link>

                <Link to="/sign-up" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "white",
                      backgroundColor: "transparent",
                      borderColor: "white",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#4da6ff",
                        borderColor: "white",
                      },
                    }}
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{ sx: { width: 350 } }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            background: "#4da6ff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <img src={logo} alt="Logo" style={{ width: "250px", maxWidth: "120px" }} />
            <IconButton onClick={() => toggleDrawer(false)}>
              <Close />
            </IconButton>
          </Box>

          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "8px 16px",
              gap: "16px",
            }}
          >
            <Box style={{ padding: "8px 16px" }}>
              <Link to="/sign-in" style={{ textDecoration: 'none', width: '100%' }}>
                <Button
                  variant="outlined"
                  sx={{
                    background: "white",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "white",
                      fontWeight: "bold",
                      borderColor: "white",
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
              <NavigationLinks />
            </Box>
          </Box>
        </div>

        {/* Categories */}
        <Typography
          variant="subtitle1"
          style={{ fontWeight: "bold", padding: "8px 16px", backgroundColor: "#f0f5ff" }}
        >
          CATEGORIES
        </Typography>
        <List>
          {drawerCategories.map((category, index) => (
            <div key={category.name}>
              <ListItem button onClick={() => handleCategoryClick(category.name)}>
                <ListItemIcon>{category.icon}</ListItemIcon>
                <ListItemText primary={category.name} />
                {expandedCategory === category.name ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              {/* Divider below "headings" */}
              {category.name === "Mobiles" && <Divider sx={{ borderColor: '#4da6ff', my: 1, width: '100%', margin: '0 auto', }} />}
              {category.name === "Smart Watches" && <Divider sx={{ borderColor: '#4da6ff', my: 1, width: '100%', margin: '0 auto', }} />}
              {category.name === "Wireless Earbuds" && <Divider sx={{ borderColor: '#4da6ff', my: 1, width: '100%', margin: '0 auto', }} />}
              {category.name === "Power Banks" && <Divider sx={{ borderColor: '#4da6ff', my: 1, width: '100%', margin: '0 auto', }} />}

              <Collapse in={expandedCategory === category.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {category.subcategories.map((subcategory) => (
                    <ListItem key={subcategory} sx={{ pl: 4 }}>
                      <ListItemText primary={subcategory} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>

        {/* Popular Lists Section */}
        <Typography variant="subtitle1" sx={{ padding: '8px 16px', backgroundColor: '#f0f5ff', fontWeight: 'bold' }}>
          POPULAR LISTS
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px 16px' }}>
          {popularLists.map((item, index) => (
            <a key={index} href={item.link} style={{ textDecoration: 'none' }}>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: 'rgb(72,175,255)',
                  borderColor: 'rgb(72,175,255)',
                  '&:hover': {
                    backgroundColor: 'rgb(72,175,255)',
                    color: 'white',
                    borderColor: 'rgb(72,175,255)'
                  },
                  padding: '8px 12px'
                }}
              >
                {item.name}
              </Button>
            </a>
          ))}
        </Box>

        {/* Main Navigation */}
        <MainNavigation />
      </Drawer>
    </Box>
  );
}