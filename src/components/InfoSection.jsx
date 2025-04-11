import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import travellerWithCamera from "../assets/travellerWithCamera.png";
import Star from "../assets/starCollection.svg?react";
import WaveIcon from "../assets/wave.svg?react";
import live from "../assets/live-streaming-icon.svg";

function InfoSection() {
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: { xs: 6, md: 8 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        overflow: "hidden",
        position: "relative",
        pt: { xs: 10, md: 20 },
      }}
    >
      <WaveIcon
        style={{
          color: "#FF5722",
          position: "absolute",
          maxWidth: "50",
          zIndex: 1,
          right: "-20",
          top: "70%",
        }}
      />
      <WaveIcon
        style={{
          color: "#0A1F7E",
          position: "absolute",
          maxWidth: "50",
          zIndex: 1,
          left: "-20",
          top: 0,
        }}
      />
      {/* Left: Explorer Image */}
      <Box
        sx={{
          flex: 1,
          bgcolor: "#f0e8dd",
          borderRadius: 4,
          position: "relative",
          overflow: "visible",
          display: "flex",
          justifyContent: "left",
          p: 3,
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Star
            style={{
              color: "#654419",
              position: "absolute",
              maxWidth: "100",
              left: "90",
              top: "60",
            }}
          />
        </Box>
        <WaveIcon
          style={{
            color: "#fff",
            position: "absolute",
            maxWidth: "50",
            right: "-10",
            top: "50%",
          }}
        />
        <Box
          component="img"
          src={travellerWithCamera}
          alt="Traveler"
          sx={{
            width: "100%",
            height: "120%",
            objectFit: "contain",
            position: "absolute",
            left: 0,
            bottom: 0,
            transform: "scaleX(-1)",
          }}
        />

        {/* Button Container */}
        <Box
          sx={{
            position: { xs: "static", md: "absolute" },
            bottom: 30,
            left: 30,
            right: 30,
            bgcolor: "white",
            borderRadius: 2,
            height: "auto",
            px: 3,
            py: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            boxShadow: 3,
            zIndex: 1,
          }}
        >
          <Typography fontWeight={700} fontSize={{ xs: 18, md: 22 }}>
            Explore the world <br />
            with us 🌍
          </Typography>
          <Button
            size="large"
            variant="contained"
            sx={{
              bgcolor: "orangered",
              px: 3,
              py: 1,
              borderRadius: 2,
              textTransform: "none",
              "&:hover": { bgcolor: "#ff4d00" },
            }}
          >
            Plan a Trip →
          </Button>
        </Box>
      </Box>

      {/* Right: Info Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          flex: 1,
          gap: 3,
        }}
      >
        <InfoCard
          title="Read our blog"
          description="We have shared our journey and some story"
          bg="#b2f2ff"
        />
        <InfoCard
          title="Chat With Expert"
          description="3,000+ our Expert team members around the world who create incredible and amazing projects"
          bg="#f1e6d9"
          iconSrc={live}
          fullHeight
        />
        <InfoCard
          title="See our workflow"
          description="It’s a must to that we would like to share our workflow to believe you"
          bg="#dbf8c5"
        />
      </Box>
    </Box>
  );
}

// Reusable Info Card Component
function InfoCard({ title, description, bg, iconSrc, fullHeight }) {
  return (
    <Box
      sx={{
        bgcolor: bg,
        borderRadius: 4,
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 200,
        position: "relative",
        transition: "all 0.3s ease",
        gridRow: fullHeight ? { xs: "auto", md: "span 2" } : "auto",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-6px) scale(1.02)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="start">
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
        <ArrowOutwardIcon />
      </Box>
      {iconSrc && (
        <Box
          component="img"
          src={iconSrc}
          alt="Icon"
          sx={{
            width: 100,
            mx: "auto",
            mt: 2,
            mb: 1,
            bgcolor: "#fff",
            px: 9,
            py: 5,
            borderRadius: 5,
          }}
        />
      )}
      <Typography
        variant="body2"
        sx={{ mt: 2, fontSize: 16, lineHeight: 1.6, fontWeight: "500" }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default InfoSection;
