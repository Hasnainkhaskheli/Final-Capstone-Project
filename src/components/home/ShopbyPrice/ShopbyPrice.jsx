import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";

const ShopByPrice = () => {
  return (
    <Box sx={{ marginTop: "200px", paddingX: 4, paddingY: 6, backgroundColor: "gray.50" }}>
      {/* Shop by Price Text */}
      <Box sx={{ display: "flex", justifyContent: "start", marginBottom: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "gray.700" }}>
          Shop by Price
        </Typography>
      </Box>

      {/* Price Buttons */}
      <Grid container spacing={2}>
        {[
          "Below Rs. 15,000",
          "Rs. 15,000 - Rs. 25,000",
          "Rs. 25,000 - Rs. 40,000",
          "Rs. 40,000 - Rs. 60,000",
          "Rs. 60,000 - Rs. 80,000",
          "Rs. 80,000 - Rs. 100,000",
          "Rs. 100,000 - Rs. 150,000",
          "Above Rs. 150,000",
        ].map((priceRange, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                paddingY: 2,
                backgroundColor: "yellow.300",
                color: "white",
                fontWeight: "bold",
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: "#48afff",
                },
              }}
            >
              {priceRange}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopByPrice;