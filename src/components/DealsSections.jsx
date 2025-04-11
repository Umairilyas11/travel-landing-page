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
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Box
        sx={{
          bgcolor: "#0a1f7e",
          color: "white",
          borderRadius: 4,
          py: { xs: 6, md: 6 },
          px: { xs: 3, md: 6 },
          position: "relative",
          zIndex: 1,
          backgroundImage: `url(${worldMap})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundBlendMode: "lighten",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
        }}
      >
        {/* ticket and heading */}
        <Box
          component="img"
          src={ticket}
          alt="ticket"
          sx={{
            height: { xs: 150, sm: 200, md: 300 },
            position: "absolute",
            right: { xs: "auto", md: "88%" },
            left: { xs: -100, md: "auto" },
            bottom: { xs: 380, md: -40 },
            zIndex: 1,
          }}
        />
        <Box
          component="img"
          src={plane}
          alt="plane"
          sx={{
            height: { xs: 20, sm: 40, md: 50 },
            position: "absolute",
            right: { xs: "auto", md: "86%" },
            left: { xs: "15%", sm: "23%", md: "auto" },
            top: { xs: 80, sm: 30 },
            zIndex: 2,
          }}
        />
        <Box
          component="svg"
          viewBox="0 0 150 80"
          sx={{
            position: "absolute",
            top: { xs: 70, sm: 50 },
            left: { xs: 10, sm: 30 },
            width: { xs: 70, sm: 150 },
            height: 80,
            zIndex: -1,
            transform: { xs: "rotate(-19deg)", sm: "rotate(-10deg)" },
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

        <Box sx={{ ml: { md: 20 }, mx: "auto" }}>
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
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              mb: { xs: 0, md: 2 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
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
            width: { xs: 300, sm: 300, md: 450, lg: 700 },
            transform: "rotate(-25deg)",
            zIndex: 2,
            position: { xs: "static", md: "absolute" },
            right: { xs: 0, md: 150 },
            bottom: { xs: 20, md: "auto" },
            mx: "auto",
          }}
        />

        {/* sponsored + suitcase */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "right" },
            position: { xs: "static", md: "absolute" },
            top: { xs: 20, md: 30 },
            right: { xs: 20, md: 70 },
            zIndex: 3,
            mx: { xs: "auto", sm: 0 },
          }}
        >
          <Typography
            fontWeight={600}
            fontSize={20}
            sx={{
              mb: 1,
              display: { xs: "block", sm: "block" },
            }}
          >
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
              width: { xs: 200, sm: 300, md: 250 },
              display: { xs: "none", sm: "block" },
              position: { xs: "static", sm: "absolute" },
              right: { xs: -10, sm: -10, md: -60 },
              top: { xs: 300, sm: 397, md: 60 },
              clipPath: "inset(0px 0px 79px 0px)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DealsSections;
