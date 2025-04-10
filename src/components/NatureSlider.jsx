import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useRef } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bus from "../assets/bus.svg";

const destinations = [
  {
    label: "Venice",
    image:
      "https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 280,
  },
  {
    label: "Iceland",
    image:
      "https://images.unsplash.com/41/LGhxuAbT5Wop4JYcrMpV_IMG_3808.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 240,
  },
  {
    label: "Moab",
    image:
      "https://images.unsplash.com/photo-1504282706065-f5866e9cbeeb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 280,
  },
  {
    label: "Arizona",
    image:
      "https://images.unsplash.com/photo-1532295039064-229629db1073?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: 240,
  },
];
function NatureSlider() {
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scroll = (direction) => {
    const scrollAmount = isMobile ? 250 : 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1280px",
        mx: "auto",
        overflow: "hidden",
        px: 2,
      }}
    >
      <Box sx={{ pt: 10, position: "relative" }}>
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ textAlign: "left", mb: 5 }}
        >
          Discover the touch of nature 🌈
        </Typography>

        {/* Arrows */}
        <Box
          sx={{
            position: "absolute",
            top: 100,
            right: 30,
            display: "flex",
            gap: 2,
            zIndex: 2,
          }}
        >
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              border: "2px solid #ccc",
              borderRadius: "50%",
              width: 40,
              height: 40,
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              border: "2px solid #000",
              borderRadius: "50%",
              width: 40,
              height: 40,
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Scrollable */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            gap: 3,
            overflowX: "auto",
            pb: 2,
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {destinations.map((place, index) => (
            <Box
              key={index}
              sx={{
                maxWidth: 300,
                height: place.height,
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Box
                component="img"
                src={place.image}
                alt={place.label}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  backgroundColor: "white",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  fontSize: 14,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                }}
              >
                <LocationOnIcon sx={{ fontSize: 16, color: "red" }} />
                {place.label}
              </Box>
            </Box>
          ))}
        </Box>

        {/* bottom line*/}
        <Box
          sx={{
            mt: 3,
            mb: 5,
            borderBottom: "3px solid #eee",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={bus}
            alt="bus"
            sx={{
              position: "absolute",
              right: -20,
              top: "-25px",
              width: 50,
              transform: "scaleX(-1)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default NatureSlider;
