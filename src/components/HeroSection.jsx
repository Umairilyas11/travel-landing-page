import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

function HeroSection() {
  return (
    <Box
      sx={{
        maxWidth: "1280px",
        mx: "auto",
        px: 2,
      }}
    >
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
            }}
          >
            People don't take trips, <br /> trips take people
          </Typography>
          <Typography variant="body1" sx={{ color: "4f4f4f", md: 4 }}>
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
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                alt="Watch Story"
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdhdGNoJTIwc3Rvcnl8ZW58MHx8fHwxNjg5NTM0NzY1&ixlib=rb-4.0.3&q=80&w=400"
                sx={{
                  width: 50,
                  height: 50,
                  border: "2px solid white",
                  boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                }}
              />
              <PlayArrowIcon sx={{ color: "orangered" }} />
              <Typography fontWeight={600}>Watch Our Story</Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            flex: 1,
            mt: { xs: 5, md: 0 },
            textAlign: "center",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdhdGNoJTIwc3Rvcnl8ZW58MHx8fHwxNjg5NTM0NzY1&ixlib=rb-4.0.3&q=80&w=400"
            alt="Traveler"
            sx={{
              width: "100%",
              maxWidth: 400,
              borderRadius: 4,
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
