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
import WaveIcon from "../assets/wave.svg?react";
import car from "../assets/car.svg";

function TrustSection() {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1280px",
        mx: "auto",
        px: { xs: 2, md: 0 },
        py: { xs: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      <WaveIcon
        style={{
          position: "absolute",
          width: 50,
          bottom: "30%",
          left: -10,
          zIndex: 1,
          color: "#F3BA24",
        }}
      />
      <Box
        component="img"
        src={car}
        alt="car"
        sx={{
          position: "absolute",
          top: 210,
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
          <Typography
            fontWeight="bold"
            fontSize={{ xs: 16, sm: 18 }}
            textAlign={"left"}
          >
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
          px: { xs: 3, md: 7 },
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
            gap: { xs: 6, md: 0 },
            mt: 5,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 500, sm: 280 },
              flexShrink: 0,
              mt: { xs: 10, md: 0 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 250, md: 300 },
                height: { xs: 160, sm: 200 },
                backgroundColor: "#a8e6ff",
                borderRadius: "20px",
                flexShrink: 0,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                ml: 4,
                mx: "auto",
              }}
            ></Box>
            <Box
              component="img"
              src={travellerYellow}
              alt="Traveller Yellow"
              sx={{
                position: "absolute",
                top: { xs: -140, sm: -140, md: -135 },
                width: { xs: "60%", sm: "120%", md: "120%" },
                left: { xs: 100, sm: 0 },
                zIndex: 1,
                mx: "auto",
              }}
            />
            <Box
              component="img"
              src={realCloud}
              alt="Cloud"
              sx={{
                position: "absolute",
                bottom: -80,
                left: { xs: 100, sm: "5%" },
                width: { xs: 300, sm: 300 },
                zIndex: 2,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -10,
                left: { xs: 100, sm: -10, md: -20 },
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
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
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
              textAlign: { xs: "center", md: "left" },
              maxWidth: 400,
              position: "relative",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                lineHeight: 1.4,
                mt: 3,
                fontSize: { xs: "1rem", sm: "1.2rem", lg: "1.5rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Your travel companion that carries all the information
            </Typography>
            <Box
              component="img"
              src={realPlane}
              alt="plane"
              sx={{
                width: { xs: 200, sm: 300 },
                zIndex: 2,
                position: "relative",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translateX(-50%)",
                width: { xs: 150, md: 200 },
                zIndex: 1,
                opacity: 0.5,
                maskImage:
                  "linear-gradient(to left, black 10%, transparent 100%)",
                maskRepeat: "no-repeat",
                maskSize: "100% 100%",
                color: "#fff",
              }}
            >
              <WaveIcon style={{}} />
            </Box>
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
              width: { xs: "100%", sm: 280 },
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={girlWithPassport}
              alt="girl with passport"
              sx={{
                position: { xs: "relative", md: "absolute" },
                width: { xs: "50%", sm: "130%" },
                top: { xs: 0, md: -217 },
                left: { xs: 0, md: -30 },
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
