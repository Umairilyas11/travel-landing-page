import { Box, Typography } from "@mui/material";
import React from "react";
import googlePlay from "../assets/buttons/googlePlay.svg";
import appStore from "../assets/buttons/appStore.svg";
import AirIcon from "@mui/icons-material/Air";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { WiDayWindy } from "react-icons/wi";
import { IoSunnyOutline } from "react-icons/io5";
import { TbSnowman } from "react-icons/tb";
import Balloon from "../assets/balloon.svg";
import cloud from "../assets/cloud.svg";
import WaveIcon from "../assets/wave.svg?react";
import Star from "../assets/starCollection.svg?react";
import { motion } from "framer-motion";

const moroccoImg =
  "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const denverImg =
  "https://images.unsplash.com/photo-1582679755502-4525f4a4a281?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function GetConnectedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: "1280px",
          mx: "auto",
          overflow: "hidden",
          px: 2,
        }}
      >
        <Box
          component="img"
          src={Balloon}
          alt="ballon"
          sx={{
            position: "absolute",
            top: 40,
            left: 60,
            width: 70,
          }}
        />
        <Box
          component="img"
          src={cloud}
          alt="Cloud"
          sx={{
            position: "absolute",
            bottom: -50,
            left: "50%",
            width: 50,
          }}
        />
        <WaveIcon
          style={{
            position: "absolute",
            bottom: "50%",
            right: -10,
            width: 50,
            color: "#F3BA24",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: 80,
            height: 80,
            bottom: { xs: 650, sm: 500, md: 50 },
            left: { xs: 0, sm: 200, md: 130 },
            borderRadius: "50%",
            backgroundColor: "#26D080",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
        <Star
          style={{
            position: "absolute",
            top: 210,
            left: 60,
            width: 100,
            transform: "rotate(-10deg)",
            color: "#FF5722",
          }}
        />
        <Box
          sx={{
            px: { xs: 2, md: 8 },
            py: { xs: 5, md: 10 },
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
            position: "relative",
            overflow: "visible",
          }}
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "100%", md: 500 },
                mb: { xs: 6, md: 0 },
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Vertical background card */}
              <Box
                sx={{
                  width: { xs: "90%", sm: 300 },
                  px: { xs: 2, sm: 3 },
                  py: 4,
                  bgcolor: "#fff",
                  borderRadius: 4,
                  boxShadow: "25px 25px 50px rgba(0,0,0,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Top Info */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                    gap: 6,
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ color: "#0a1f7e" }}
                  >
                    -12°
                    <Box component="span" sx={{ color: "gray", opacity: 0.5 }}>
                      C
                    </Box>
                  </Typography>
                  <Box sx={{ display: "block" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <AirIcon
                        fontSize="large"
                        sx={{ color: "orangered", mr: 2 }}
                      />
                      <Typography>
                        Wind <br />
                        <strong style={{ color: "orangered" }}>13 km</strong>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AcUnitIcon
                        fontSize="large"
                        sx={{ color: "orangered", mr: 2 }}
                      />
                      <Typography>
                        Snow
                        <br />{" "}
                        <strong style={{ color: "orangered" }}>80 cm</strong>
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Main Cards Side by Side */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    width: { xs: 350, md: 450 },
                  }}
                >
                  {/* Morocco Card */}
                  <Box
                    sx={{
                      width: "50%",
                      bgcolor: "#fff",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      p: 1,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={moroccoImg}
                      alt="Morocco"
                      sx={{
                        width: "100%",
                        height: 100,
                        objectFit: "cover",
                        borderRadius: 3,
                      }}
                    />
                    <Box sx={{ p: 1.5 }}>
                      <Typography fontWeight="bold">Morocco</Typography>
                      <Typography fontSize={13} color="text.secondary">
                        YVR → LAX → DXB
                      </Typography>
                    </Box>
                  </Box>

                  {/* Denver Card */}
                  <Box
                    sx={{
                      width: "50%",
                      bgcolor: "#fff",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      p: 1,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={denverImg}
                      alt="Denver"
                      sx={{
                        width: "100%",
                        height: 100,
                        objectFit: "cover",
                        borderRadius: 3,
                      }}
                    />
                    <Box sx={{ p: 1.5 }}>
                      <Typography fontWeight="bold">Denver</Typography>
                      <Typography fontSize={13} color="text.secondary">
                        YVR → LAX
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Bottom Stats */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 3,
                    px: 2,
                    gap: 5,
                  }}
                >
                  <Box textAlign="center">
                    <IoSunnyOutline fontSize="40" color="#ff4500" />
                    <Typography fontWeight="bold">-12°C</Typography>
                    <Typography fontSize={13}>Temp</Typography>
                  </Box>
                  <Box textAlign="center">
                    <WiDayWindy fontSize="39" color="#ff4500" />
                    <Typography fontWeight="bold">13 km</Typography>
                    <Typography fontSize={13}>Wind</Typography>
                  </Box>
                  <Box textAlign="center">
                    <TbSnowman fontSize="39" color="#ff4500" />
                    <Typography fontWeight="bold">80 cm</Typography>
                    <Typography fontSize={13}>Snow</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                maxWidth: { xs: "100%", md: 400 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                sx={{ color: "gray", letterSpacing: 1.5, fontWeight: "bold" }}
              >
                GET CONNECTED
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ my: 2, color: "#08012E" }}
              >
                It is better to travel well than to arrive 🪧
              </Typography>
              <Typography
                sx={{
                  mb: 3,
                  color: "#08012E",
                  maxWidth: "250px",
                  fontWeight: "500",
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Your ultimate travel companion. <br />
                Carries all the information you need while travelling.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexWrap: "wrap",
                  mt: 3,
                }}
              >
                <Box
                  component="img"
                  src={googlePlay}
                  alt="Google Play"
                  sx={{
                    width: 190,
                    height: "auto",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    },
                  }}
                />
                <Box
                  component="img"
                  src={appStore}
                  alt="App Store"
                  sx={{
                    width: 190,
                    height: "auto",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",

                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    },
                  }}
                />
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}

export default GetConnectedSection;
