import React from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StarLogo from "./StarLogo";

const Navbar = () => {
  const menuItems = ["Reviews", "Destinations", "Tickets", "Blog"];
  const activeIndex = 0;
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        mx: "auto",
        px: 2,
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "white", color: "#0A0A23" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: 4, py: 1.5 }}>
          <Box display="flex" alignItems="center" gap={3}>
            <Box display="flex" alignItems="center" gap={1}>
              <StarLogo />

              <Typography variant="h6" fontWeight={700}>
                Kanra
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#f5f5f5",
                px: 2,
                py: 0.5,
                borderRadius: 2,
                minWidth: 250,
                boxShadow: "0px 1px 3px rgba(0,0,0,0.05)",
              }}
              gap={2}
            >
              <SearchIcon sx={{ color: "orangered" }} />
              <InputBase placeholder="Search destinations.." fullWidth />
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={4}>
            {menuItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  pb: 0.5,
                  cursor: "pointer",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: index === activeIndex ? "20px" : "0",
                    height: "2px",
                    backgroundColor: "orangered",
                    borderRadius: 2,
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "20px",
                  },
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight={index === activeIndex ? "bold" : "normal"}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {item}
                </Typography>
                {index === activeIndex && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: "25%",
                      width: "50%",
                      height: "2px",
                      backgroundColor: "orangered",
                      borderRadius: 2,
                    }}
                  />
                )}
              </Box>
            ))}
            <Button
              variant="contained"
              sx={{
                bgcolor: "orangered",
                borderRadius: 2,
                px: 3,
                py: 1,
                textTransform: "none",
                boxShadow: "0px 4px 12px rgba(255, 87, 34,0.3)",
                "&:hover": {
                  bgcolor: "#ff5e33",
                },
              }}
            >
              Get the App
            </Button>
          </Box>
        </Toolbar>
        <Divider sx={{ bgcolor: "#eee", height: "1px", mx: 4 }} />
      </AppBar>
    </Box>
  );
};

export default Navbar;
