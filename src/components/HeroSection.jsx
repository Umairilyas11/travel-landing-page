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
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: "1280px",
          mx: "auto",
          overflow: "hidden",
          px: { xs: 2, md: 4 },
          pt: { xs: 6, md: 10 },
          pb: { xs: 10, md: 15 },
        }}
      >
        <Box
          component="img"
          src={plane}
          alt="Plane"
          sx={{
            position: "absolute",
            top: { xs: 20, md: 40 },
            right: { xs: 30, md: 60 },
            width: 40,
          }}
        />
        <Box
          component="img"
          src={balloon}
          alt="Balloon"
          sx={{
            position: "absolute",
            top: { xs: 70, md: 20 },
            left: { xs: "5%", md: "50%" },
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
        <Box
          sx={{
            top: { xs: "60%", sm: 500, md: 250 },
            left: { xs: "10%", sm: "27%", md: "58%" },
            position: "absolute",
            width: 100,
            transform: "rotate(7deg)",
            color: "#FF5722",
          }}
        >
          <Star />
        </Box>
        <Box
          component="img"
          src={compass}
          alt="compass"
          sx={{
            position: "absolute",
            top: { xs: "90%", md: 450 },
            left: { xs: "65%", md: "80%" },
            width: { xs: 70, md: 100 },
          }}
        />
        <WaveIcon
          style={{
            position: "absolute",
            top: 300,
            right: -15,
            width: 50,
            color: "#F3BA24",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 6, md: 10 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  mb: 3,
                  maxWidth: "60%",
                  color: "#0A0A23",
                  lineHeight: 1.2,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                People don't take trips, trips <br /> take people
              </Typography>
            </motion.div>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <WaveIcon
                style={{
                  position: "absolute",
                  top: "35%",
                  left: "23%",
                  width: 50,
                  height: "auto",
                  color: "#1F0E85",
                  opacity: 0.8,
                }}
              />
            </Box>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#4f4f4f",
                  fontSize: { xs: "14px", md: "16px" },
                  maxWidth: 400,
                  mx: { xs: "auto", md: 0 },
                  mb: 4,
                }}
              >
                To get the best of your advanture you need to leave and go where
                you like. We are waiting for you!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                alignItems="center"
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                >
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
                </motion.div>
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
            </motion.div>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            >
              <Box
                sx={{
                  width: { xs: 250, sm: 300, md: 340 },
                  height: { xs: 250, sm: 300, md: 340 },
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
                    right: { xs: "-50px", md: "-70px" },
                    top: "20%",
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    padding: "12px",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 80,
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
                    sx={{ fontSize: "16px" }}
                  >
                    24/7
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ fontSize: "11px" }}
                  >
                    Guide Support
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default HeroSection;
