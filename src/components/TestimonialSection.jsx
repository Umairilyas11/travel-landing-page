import { Avatar, Box, IconButton, Button, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import avatar1 from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import avatar5 from "../assets/avatar5.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import cloud from "../assets/cloud.svg";
import { motion } from "framer-motion";

const destinations = [
  {
    label: "Nowhere",
    image:
      "https://images.unsplash.com/photo-1444771820225-000ebb5d7ac3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "Canada",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "Algeria",
    image:
      "https://images.unsplash.com/photo-1595168318069-217391d91943?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const companies = [
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "OYO",
    src: "https://cdn.brandfetch.io/idSXt7tZEr/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  },
  {
    name: "Airbnb",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  },
  {
    name: "TripAdvisor",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/02/TripAdvisor_Logo.svg",
  },
  {
    name: "Expedia",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Expedia_Logo_2023.svg",
  },
  {
    name: "FedEx",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg",
  },
];

function TestimonialSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: "1280px",
          mx: "auto",
          overflow: "hidden",
          px: { xs: 2, md: 6 },
          py: { xs: 6, md: 10 },
        }}
      >
        <Box
          sx={{
            bgcolor: "#FCF9FE",
            py: { xs: 6, md: 10 },
            px: { xs: 2, md: 8 },
            borderRadius: "30px",
          }}
        >
          {/* Top Content */}

          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: 300, md: 350 },
                  height: 350,
                  mx: "auto",
                }}
              >
                {/* Main PlaneWing Image */}
                <StarIcon
                  fontSize="large"
                  sx={{
                    position: "absolute",
                    left: "60%",
                    top: 20,
                    zIndex: 1,
                    transform: "rotate(15deg)",
                    opacity: 0.7,
                  }}
                />
                <Box
                  component="img"
                  src={cloud}
                  alt="Cloud"
                  sx={{
                    maxWidth: 50,
                    bottom: "40%",
                    position: "absolute",
                  }}
                />
                <Box
                  component="img"
                  src={cloud}
                  alt="Cloud"
                  sx={{
                    maxWidth: 40,
                    bottom: "60%",
                    left: "80%",
                    position: "absolute",
                  }}
                />
                <Box
                  component="img"
                  src={destinations[0].image}
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 50,
                    boxShadow: 3,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 100,
                    left: 10,
                    bgcolor: "white",
                    px: 1,
                    py: 0.2,
                    borderRadius: 1,
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    boxShadow: 1,
                  }}
                >
                  <LocationOnIcon
                    fontSize="small"
                    sx={{ color: "red", mr: 0.5 }}
                  />
                  Nowhere
                </Box>

                {/* Canada Image */}
                <Box
                  component="img"
                  src={destinations[1].image}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 180,
                    left: "60%",
                    boxShadow: 3,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 250,
                    left: 270,
                    bgcolor: "white",
                    px: 1,
                    py: 0.2,
                    borderRadius: 1,
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    boxShadow: 1,
                  }}
                >
                  <LocationOnIcon
                    fontSize="small"
                    sx={{ color: "red", mr: 0.5 }}
                  />
                  Canada
                </Box>

                {/* Algeria Image */}
                <Box
                  component="img"
                  src={destinations[2].image}
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 225,
                    left: 100,
                    boxShadow: 3,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 250,
                    left: 50,
                    bgcolor: "white",
                    px: 1,
                    py: 0.2,
                    borderRadius: 1,
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    boxShadow: 1,
                  }}
                >
                  <LocationOnIcon
                    fontSize="small"
                    sx={{ color: "red", mr: 0.5 }}
                  />
                  Algeria
                </Box>
              </Box>
            </motion.div>
            {/* Review */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <Box flex={1}>
                <Box
                  sx={{
                    width: { xs: 30, md: 50 },
                    height: { xs: 30, md: 50 },
                    borderRadius: "50%",
                    position: "absolute",
                    left: { xs: "80%", sm: "90%" },
                    top: { xs: 420, md: 160 },
                    bgcolor: "white",
                    display: "flex",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <Typography
                    fontFamily="revert"
                    sx={{
                      color: "#0A0433",
                      fontSize: { xs: "2rem", md: "3rem" },
                    }}
                  >
                    &rdquo;
                  </Typography>
                </Box>
                <Box sx={{ px: { xs: 2, md: 10 } }}>
                  <Typography
                    fontSize={{ xs: 18, sm: 20, md: 27 }}
                    fontWeight="bold"
                    color="#0A0433"
                    textAlign={{ xs: "center", md: "left" }}
                  >
                    Their service is absolutely wonderful and cheaper than the
                    hotel direct or any other booking site. You got back to us
                    strait away and no issues at all in the other end.
                  </Typography>
                </Box>
                <Box
                  mt={3}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    gap: { xs: 1, md: 3 },
                  }}
                >
                  {[avatar1, avatar2, avatar3, avatar4, avatar5].map(
                    (src, idx) => (
                      <Avatar
                        key={idx}
                        src={src}
                        sx={{
                          width: { xs: 30, sm: 45, md: 60 },
                          height: { xs: 30, sm: 45, md: 60 },
                        }}
                      />
                    )
                  )}
                  <IconButton
                    sx={{
                      border: "2px solid #0a0a23",
                      ml: 1,
                      width: { xs: 30, sm: 45, md: 60 },
                      height: { xs: 30, sm: 45, md: 60 },
                      transition: "all 0.5s ease",
                      "&:hover": {
                        bgcolor: "#FF5722",
                      },
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </Box>
              </Box>
            </motion.div>
          </Box>

          {/* Brand Logos */}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 6,
              mt: 6,
            }}
          >
            {companies.map((company, i) => (
              <Box
                key={i}
                component="img"
                src={company.src}
                alt={company.name}
                sx={{
                  height: 40,
                  maxWidth: 120,
                  filter: "grayscale(100%) brightness(0.5)",
                  opacity: 0.8,
                  transition: "0.3s",
                  "&:hover": {
                    filter: "grayscale(0%) brightness(1)",
                    opacity: 1,
                  },
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              mt: 4,
              height: "2px",
              backgroundColor: "#e5e7eb",
            }}
          />
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default TestimonialSection;
