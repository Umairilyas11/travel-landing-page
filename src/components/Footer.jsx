import React from "react";
import {
  Box,
  Typography,
  Grid,
  InputBase,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import { Email, Phone } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import StarLogo from "../assets/star.svg?react";
import mapWithPin from "../assets/mapWithPin.jpg";
import StripeLogo from "../assets/stripeLogo.svg?react";
import PayPalLogo from "../assets/PayPalLogo.svg?react";
import WooLogo from "../assets/WooCommerce_logo.svg?react";

function Footer() {
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        mx: "auto",
        px: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: "#201276",
          color: "white",
          px: 6,
          pt: 4,
          pb: 4,
          borderRadius: 10,
        }}
      >
        {/* Top Row */}
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          pb={5}
        >
          <Grid item xs={12} md={6}>
            <Typography fontWeight={700} fontSize={22} mb={2}>
              Leading the way <br />
              in adventure
            </Typography>
          </Grid>
          <Grid>
            <Box display="flex" gap={2}>
              <IconButton color="inherit">
                <SportsBasketballIcon />
              </IconButton>
              <IconButton color="inherit">
                <YouTubeIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", md: "block" },
              bgcolor: "#3b2dd1",
            }}
          />
          <Grid item xs={12} md={6} display="flex">
            <Typography fontWeight={600} mb={1}>
              Join our <br /> Newsletter
            </Typography>
            <Box
              sx={{
                display: "flex",
                bgcolor: "white",
                borderRadius: 3,
                overflow: "hidden",
                maxWidth: 300,
                ml: 10,
              }}
            >
              <InputBase
                placeholder="Your e-mail"
                sx={{ px: 2, flex: 1, color: "#000" }}
              />
              <Button
                sx={{
                  bgcolor: "orangered",
                  minWidth: 40,
                  borderRadius: 0,
                  "&:hover": { bgcolor: "#ff5722" },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "#3b2dd1", mb: 4 }} />

        {/* Bottom Row */}
        <Grid container spacing={4} justifyContent="space-around">
          <Grid item xs={12} md={3}>
            {/* Brand logo and map */}
            <Box
              display="flex"
              justifyContent="left"
              alignItems="center"
              gap={1}
              mb={2}
            >
              <StarLogo style={{ height: "40" }} />
              <Typography variant="h4" fontWeight={700}>
                Kanra
              </Typography>
            </Box>
            <Box
              component="img"
              src={mapWithPin}
              alt="Map"
              sx={{
                width: "100%",
                maxWidth: 160,
                borderRadius: 2,
                boxShadow: 2,
              }}
            />
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography fontWeight={600} mb={1}>
              Contact
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Email fontSize="small" />
              <Typography variant="body2">getemail@kanra.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Phone fontSize="small" />
              <Typography variant="body2">(270) 555-0117</Typography>
            </Box>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography fontWeight={600} mb={1}>
              Company
            </Typography>
            <Typography variant="body2" mb={1}>
              Career
            </Typography>
            <Typography variant="body2" mb={1}>
              Developers
            </Typography>
            <Typography variant="body2">Our Story</Typography>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography fontWeight={600} mb={1}>
              Kanra
            </Typography>
            <Typography variant="body2" mb={1}>
              Why Kanra
            </Typography>
            <Typography variant="body2" mb={1}>
              Customer
            </Typography>
            <Typography variant="body2">Press Info</Typography>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography fontWeight={600} mb={1}>
              Resources
            </Typography>
            <Typography variant="body2" mb={1}>
              Career
            </Typography>
            <Typography variant="body2" mb={1}>
              About Us
            </Typography>
            <Typography variant="body2">Features</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "#3b2dd1", mt: 4, mb: 2 }} />

        {/* Footer Bottom Bar */}
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Typography variant="body2">
            © 2023 <strong>Rylic Studio</strong> | All Rights Reserved
          </Typography>
          <Box display="flex" gap={2}>
            <StripeLogo
              height={20}
              sx={{
                fill: "#fff",
              }}
            />
            <PayPalLogo
              height={20}
              sx={{
                fill: "#fff",
              }}
            />
            <WooLogo height={20} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
