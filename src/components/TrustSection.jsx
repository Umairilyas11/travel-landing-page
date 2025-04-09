import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import travellerYellow from "../assets/traveller-yellow.png";
import girlWithPassport from "../assets/girl-with-passport.png";
import cloud from "../assets/cloud.svg";
import realCloud from "../assets/real-cloud.png";
import realPlane from "../assets/real-plane.png";
import wave from "../assets/wave-white.svg";
import car from "../assets/car.svg";
import wave2 from "../assets/wave-orange.svg";

function TrustSection() {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1280px",
        mx: "auto",
        px: 2,
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={wave2}
        alt="wave"
        sx={{
          position: "absolute",
          width: 50,
          bottom: "30%",
          left: 0,
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={car}
        alt="car"
        sx={{
          position: "absolute",
          top: 130,
          left: "65%",
          width: 40,
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={cloud}
        alt="car"
        sx={{
          position: "absolute",
          top: 30,
          left: "30%",
          width: 40,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          textAlign: "center",
          md: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: "center",
            mb: 2,
          }}
        >
          {[avatar, avatar2, avatar3].map((avatar, i) => (
            <Avatar
              key={i}
              src={avatar}
              alt={`avatar-${i}`}
              sx={{
                width: 40,
                height: 40,
                border: "4px solid white",
                boxShadow: "0 0 6px rgba(0,0,0,0.1)",
                zIndex: i - 3,
                ml: i !== 0 ? -3 : 0,
              }}
            />
          ))}

          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "#0a1f7e",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white",
              ml: -3,
              boxShadow: "0 0 6px rgba(0,0,0,0.1)",
            }}
          >
            3K+
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <Typography fontWeight="bold" fontSize={18} textAlign={"left"}>
            Travelled more than <br />
            2000 places 🌍
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          bgcolor: "#0a1f7e",
          color: "white",
          px: { xs: 2, md: 7 },
          borderRadius: "40px",
        }}
      >
        {/* left side */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            mt: 5,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: 280,
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: 300,
                height: 200,
                backgroundColor: "#a8e6ff",
                borderRadius: "20px",
                flexShrink: 0,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                ml: 4,
              }}
            ></Box>
            <Box
              component="img"
              src={travellerYellow}
              alt="Traveller Yellow"
              sx={{
                position: "absolute",
                top: -140,
                width: "120%",
                zIndex: 1,
              }}
            />
            <Box
              component="img"
              src={realCloud}
              alt="Cloud"
              sx={{
                position: "absolute",
                bottom: -80,
                left: "5%",
                width: 300,
                zIndex: 2,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -10,
                left: 10,
                width: 50,
                height: 50,
                borderRadius: "50%",
                backgroundColor: "orangered",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 3,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                border: "4px solid white",
                transition: "all 0.3s ease-in-out", // Smooth animation
                cursor: "pointer", // Indicates it's interactive
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 6px 16px rgba(255, 87, 34, 0.5)",
                },
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid white",
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                }}
              />
            </Box>
            <Box />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 400,
              position: "relative",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="left"
              sx={{ lineHeight: 1.4, mt: 3 }}
            >
              Your travel companion that carries all the information
            </Typography>
            <Box
              component="img"
              src={realPlane}
              alt="plane"
              sx={{
                width: 300,
                zIndex: 2,
                position: "relative",
              }}
            />
            <Box
              component="img"
              src={wave}
              alt="wave"
              sx={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translateX(-50%)",
                width: 200,
                zIndex: 1,
                opacity: 0.5,
                maskImage:
                  "linear-gradient(to left, black 10%, transparent 100%)",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
              }}
            />
            <Box
              component="img"
              src={realCloud}
              alt="Cloud"
              sx={{
                position: "absolute",
                bottom: 100,
                left: "100%",
                width: 100,
                zIndex: 2,
              }}
            />
          </Box>

          <Box
            sx={{
              position: "relative",
              width: 280,
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={girlWithPassport}
              alt="girl with passport"
              sx={{
                position: "absolute",
                width: "130%",
                top: -217,
                left: -30,
                zIndex: 2,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TrustSection;
