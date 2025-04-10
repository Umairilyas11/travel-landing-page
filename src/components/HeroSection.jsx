import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import travelerImg from "../assets/travelling-man.png";
import storyAvatar from "../assets/avatar.jpg";
import liveBadge from "../assets/live.svg";
import plane from "../assets/plane.svg";
import cloud from "../assets/cloud.svg";
import Star from "../assets/starCollection.svg?react";
import balloon from "../assets/balloon.svg";
import compass from "../assets/compass.svg";
import WaveIcon from "../assets/wave.svg?react";

function HeroSection() {
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
        component="img"
        src={plane}
        alt="Plane"
        sx={{
          position: "absolute",
          top: 40,
          right: 60,
          width: 40,
        }}
      />
      <Box
        component="img"
        src={balloon}
        alt="Balloon"
        sx={{
          position: "absolute",
          top: 20,
          left: "50%",
          width: 70,
        }}
      />
      <Box
        component="img"
        src={cloud}
        alt="Cloud"
        sx={{
          position: "absolute",
          top: 150,
          right: 40,
          width: 50,
        }}
      />{" "}
      <Box
        component="img"
        src={cloud}
        alt="Cloud"
        sx={{
          position: "absolute",
          top: 30,
          left: 0,
          width: 50,
        }}
      />
      <Star
        style={{
          position: "absolute",
          top: 250,
          left: "55%",
          width: 100,
          transform: "rotate(7deg)",
          color: "#FF5722",
        }}
      />
      <Box
        component="img"
        src={compass}
        alt="compass"
        sx={{
          position: "absolute",
          top: 450,
          left: "80%",
          width: 130,
        }}
      />
      <WaveIcon
        style={{
          position: "absolute",
          top: 400,
          right: -15,
          width: 50,
          color: "#F3BA24",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 10 },
          flexDirection: { xs: "column", md: "row" },
          bgColor: "#fff",
        }}
      >
        <Box
          sx={{
            flex: 1,
            maxWidth: 600,
          }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              mb: 3,
              color: "#0A0A23",
              lineHeight: 1.2,
              maxWidth: 350,
            }}
          >
            People don't take trips, <br /> trips take people
          </Typography>
          <WaveIcon
            style={{
              position: "absolute",
              top: "45%",
              left: "20%",
              width: 50,
              height: "auto",
              color: "#1F0E85",
              opacity: 0.8,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              color: "4f4f4f",
              md: 4,
              maxWidth: 400,
              paddingBottom: 5,
            }}
          >
            To get the best of your advanture you need to leave and go where you
            like. We are waiting for you!
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Button
              variant="contained"
              sx={{
                bgcolor: "orangered",
                borderRadius: 2,
                px: 4,
                py: 1.5,
                textTransform: "none",
                fontWeight: 600,
                boxShadow: "0px 4px 12px rgba(255,87,34,0.3)",
                "&:hover": {
                  bgcolor: "#ff5e33",
                },
              }}
            >
              Plan a Trip
              <KeyboardArrowRightOutlinedIcon />
            </Button>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box
                sx={{
                  position: "relative",
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 180deg at 50% 50%, #00CFFF, #FF7A00)",
                  padding: "3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 0 10px 3px rgba(255, 122, 0, 0.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={storyAvatar}
                    alt="Story"
                    sx={{
                      width: "85%",
                      height: "85%",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    right: "-5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 14, color: "#0A0A23" }} />
                </Box>
              </Box>

              <Typography fontWeight={600} sx={{ maxWidth: 100 }}>
                Watch Our Story
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "relative",
            mt: { xs: 8, md: 0 },
          }}
        >
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "#A8E6FF",
              borderRadius: 4,
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={travelerImg}
              alt="Traveler"
              sx={{
                position: "absolute",
                width: "110%",
                maxWidth: "380px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: "-70px",
                top: "20%",
                backgroundColor: "#fff",
                borderRadius: 2,
                padding: "16px",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 90,
              }}
            >
              <Box
                component="img"
                src={liveBadge}
                alt="Live badge"
                sx={{ width: 40, mb: 1 }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ fontSize: "18px" }}
              >
                24/7
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Guide Support
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
