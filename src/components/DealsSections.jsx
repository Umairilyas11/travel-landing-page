import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ticket from "../assets/ticket.png";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import redPlane from "../assets/redPlane.png";
import suitCase from "../assets/suitCase.png";
import worldMap from "../assets/worldMap.png";
import plane from "../assets/plane.svg";

function DealsSections() {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1280px",
        mx: "auto",
        overflow: "hidden",
        pt: 15,
        pb: 15,
      }}
    >
      <Box
        sx={{
          bgcolor: "#0a1f7e",
          color: "white",
          borderRadius: 4,
          py: 6,
          px: { xs: 3, md: 6 },
          position: "relative",
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          zIndex: 1,
          backgroundImage: `url(${worldMap})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundBlendMode: "lighten",
        }}
      >
        {/* ticket and heading */}
        <Box
          component="img"
          src={ticket}
          alt="ticket"
          sx={{
            height: 300,
            mb: 2,
            position: "absolute",
            right: "88%",
            bottom: -50,
          }}
        />
        <Box
          component="img"
          src={plane}
          alt="plane"
          sx={{
            height: 50,
            mb: 2,
            position: "absolute",
            right: "86%",
            top: 30,
          }}
        />
        <Box
          component="svg"
          viewBox="0 0 150 80"
          sx={{
            position: "absolute",
            top: 50,
            left: 30,
            width: 150,
            height: 80,
            zIndex: -1,
            transform: "rotate(-10deg)",
          }}
        >
          <path
            d="M0,60 C40,60 60,20 120,20"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="10,8"
            fill="transparent"
            strokeLinecap="round"
          />
        </Box>

        <Box sx={{ flex: 1, ml: 20 }}>
          <Button
            size="large"
            variant="contained"
            sx={{
              bgcolor: "#69e3ff",
              color: "#0a1f7e",
              px: 3,
              py: 1.2,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#4dd4ec",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              },
              mb: 2,
            }}
            endIcon={
              <AirplanemodeActiveIcon
                sx={{
                  transform: "rotate(90deg)",
                }}
              />
            }
          >
            Get Tickets
          </Button>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Find the <br /> best{" "}
            <span style={{ color: "#fff", fontWeight: "bold" }}>deals</span>
          </Typography>
        </Box>

        {/* red Airplane */}
        <Box
          component="img"
          src={redPlane}
          alt="Plane"
          sx={{
            width: { xs: 250, md: 700 },
            transform: "rotate(-25deg)",
            zIndex: 2,
            position: "absolute",
            right: 150,
          }}
        />

        {/* sponsored + suitcase */}
        <Box
          sx={{
            flex: 1,
            textAlign: "right",
            position: "absolute",
            top: 30,
            right: 70,
            zIndex: 3,
          }}
        >
          <Typography fontWeight={600} fontSize={20} sx={{ mb: 1 }}>
            Sponsored by -
          </Typography>
          <Typography
            fontWeight={900}
            sx={{
              fontSize: 22,
              bgcolor: "white",
              color: "#0a1f7e",
              display: "inline-block",
              px: 2,
              py: 0.5,
              borderRadius: 0.2,
            }}
          >
            HAWKS
          </Typography>
          <Box
            component="img"
            src={suitCase}
            alt="suitcase"
            sx={{
              width: 250,
              mt: 2,
              position: "absolute",
              right: -60,
              top: 60,
              clipPath: "inset(0px 0px 71px 0px)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DealsSections;
