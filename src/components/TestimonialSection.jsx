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
    <Box
      sx={{
        position: "relative",
        maxWidth: "1280px",
        mx: "auto",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          bgcolor: "#FCF9FE",
          py: 10,
          px: 15,
          borderRadius: "30px",
          maxWidth: "1280px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {/* Top Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Images */}
          <Box
            sx={{
              position: "relative",
              width: 350,
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
              <LocationOnIcon fontSize="small" sx={{ color: "red", mr: 0.5 }} />
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
              <LocationOnIcon fontSize="small" sx={{ color: "red", mr: 0.5 }} />
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
              <LocationOnIcon fontSize="small" sx={{ color: "red", mr: 0.5 }} />
              Algeria
            </Box>
          </Box>

          {/* Review */}

          <Box flex={1}>
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                position: "absolute",
                left: "90%",
                top: 100,
                bgcolor: "white",
                display: "flex",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="h2"
                fontFamily="revert"
                sx={{ color: "#0A0433" }}
              >
                &rdquo;
              </Typography>
            </Box>
            <Typography
              fontSize={27}
              fontWeight="bold"
              mb={2}
              pl={10}
              color="#0A0433"
            >
              Their service is absolutely wonderful and cheaper than the hotel
              direct or any other booking site. You got back to us strait away
              and no issues at all in the other end.
            </Typography>
            <Box
              mt={3}
              display="flex"
              alignItems="center"
              gap={3}
              justifyContent="center"
            >
              {[avatar1, avatar2, avatar3, avatar4, avatar5].map((src, idx) => (
                <Avatar key={idx} src={src} sx={{ width: 60, height: 60 }} />
              ))}
              <IconButton
                sx={{
                  border: "2px solid #0a0a23",
                  ml: 1,
                  width: 60,
                  height: 60,
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Brand Logos */}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
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

          mx: "auto",
        }}
      />
    </Box>
  );
}

export default TestimonialSection;
