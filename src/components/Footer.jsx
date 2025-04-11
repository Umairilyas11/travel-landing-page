import React from "react";
import {
  Box,
  Typography,
  Grid,
  InputBase,
  Button,
  Divider,
  IconButton,
  Link,
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
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
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
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                justifyContent="center"
                gap={2}
                mb={{ xs: 3, sm: 0 }}
              >
                {[
                  <SportsBasketballIcon />,
                  <YouTubeIcon />,
                  <InstagramIcon />,
                  <TwitterIcon />,
                ].map((icon, index) => (
                  <IconButton
                    key={index}
                    color="inherit"
                    sx={{
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "orangered", // icon color on hover
                        transform: "scale(1.2)", // grow slightly
                        backgroundColor: "rgba(255,255,255,0.1)", // subtle background on hover
                      },
                    }}
                  >
                    {icon}
                  </IconButton>
                ))}
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
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              gap={{ xs: 0, sm: 5 }}
            >
              <Box display="flex" alignItems="center" gap={2}>
                <Typography
                  fontWeight={600}
                  textAlign={{ xs: "center", sm: "left" }}
                  pb={{ xs: 2, sm: 0 }}
                >
                  Join our <br /> Newsletter
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  overflow: "hidden",
                  maxWidth: 300,
                  backgroundColor: "transparent",
                  backdropFilter: "blur(4px)",
                }}
              >
                <InputBase
                  placeholder="Your e-mail"
                  sx={{
                    px: 2,
                    py: 1.2,
                    flex: 1,
                    fontSize: 14,
                    color: "white",
                    "&::placeholder": {
                      color: "rgba(255,255,255,0.6)",
                      opacity: 1,
                    },
                  }}
                />
                <Button
                  sx={{
                    bgcolor: "orangered",
                    borderRadius: "8px",
                    minWidth: 40,
                    height: 40,
                    m: 0.5,
                    "&:hover": {
                      bgcolor: "#ff5722",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowForwardIosIcon
                    fontSize="small"
                    sx={{ color: "white", fontSize: 16 }}
                  />
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ bgcolor: "#3b2dd1", mb: 4 }} />

          {/* Bottom Row */}
          <Grid
            container
            spacing={4}
            justifyContent="space-around"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
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
                <Link
                  href="mailto:getemail@kanra.com"
                  variant="body2"
                  underline="none"
                  color="inherit"
                  sx={{
                    opacity: "0.7",
                  }}
                >
                  getemail@kanra.com
                </Link>
              </Box>

              <Box display="flex" alignItems="center" gap={1}>
                <Phone fontSize="small" />
                <Link
                  href="tel:+12705550117"
                  variant="body2"
                  underline="none"
                  color="inherit"
                  sx={{
                    opacity: "0.7",
                  }}
                >
                  (270) 555-0117
                </Link>
              </Box>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography fontWeight={600} mb={1}>
                Company
              </Typography>

              <Link href="#" underline="none" color="inherit">
                <Typography variant="body2" mb={1} sx={{ opacity: 0.8 }}>
                  Career
                </Typography>
              </Link>

              <Link href="#" underline="none" color="inherit">
                <Typography variant="body2" mb={1} sx={{ opacity: 0.8 }}>
                  Developers
                </Typography>
              </Link>

              <Link href="#" underline="none" color="inherit">
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Our Story
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography fontWeight={600} mb={1}>
                Kanra
              </Typography>

              <Link href="#" underline="none" color="inherit">
                <Typography variant="body2" mb={1} sx={{ opacity: 0.8 }}>
                  Why Kanra
                </Typography>
              </Link>

              <Link href="#" underline="none" color="inherit">
                <Typography variant="body2" mb={1} sx={{ opacity: 0.8 }}>
                  Customer
                </Typography>
              </Link>

              <Link href="#" underline="none" color="inherit">
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Press Info
                </Typography>
              </Link>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography fontWeight={600} mb={1}>
                Resources
              </Typography>

              <Link href="#" underline="none" color="inherit">
                <Typography variant="body2" mb={1} sx={{ opacity: 0.8 }}>
                  Career
                </Typography>
              </Link>

              <Link href="#" underline="none" color="inherit">
                <Typography variant="body2" mb={1} sx={{ opacity: 0.8 }}>
                  About Us
                </Typography>
              </Link>

              <Link href="#" underline="none" color="inherit">
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Features
                </Typography>
              </Link>
            </Grid>
          </Grid>

          <Divider sx={{ bgcolor: "#3b2dd1", mt: 4, mb: 2 }} />

          {/* Footer Bottom Bar */}
          <Box
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "center", sm: "flex-start" }}
            textAlign={{ xs: "center", sm: "left" }}
            gap={2}
          >
            <Typography variant="body2">
              © 2023 <strong>Rylic Studio</strong> | All Rights Reserved
            </Typography>
            <Box display="flex" gap={2}>
              <StripeLogo
                height={20}
                sx={{
                  fill: "#fff",
                }}
                cursor="pointer"
              />
              <PayPalLogo
                height={20}
                sx={{
                  fill: "#fff",
                }}
                cursor="pointer"
              />
              <WooLogo height={20} cursor="pointer" />
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Footer;
