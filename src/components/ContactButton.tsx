"use client";

import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import { Button, Box } from "@mui/material";
import Link from "next/link";
import { colors } from "@/theme/theme";

export default function ContactButton() {
  return (
    <Button
      component={Link}
      href="/contacto"
      variant="contained"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        backgroundColor: colors.light,
        color: colors.primary,
        fontWeight: 600,
        pl: 0.5,
        pr: 2,
        py: 0,
        fontSize: { xs: "0.875rem", md: "1rem" },
        borderRadius: "50px",
        textTransform: "none",
        boxShadow: "none",
        minHeight: { xs: 44, md: 48 },
        "&:hover": {
          backgroundColor: colors.secondary,
          boxShadow: "0 4px 12px rgba(12, 31, 53, 0.3)",
          color: colors.light,
        },
        transition: "all 0.3s ease",
      }}
      disableElevation
    >
      <Box
        sx={{
          backgroundColor: colors.secondary,
          borderRadius: "50%",
          width: { xs: 32, md: 36 },
          height: { xs: 32, md: 36 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <PhoneInTalkOutlinedIcon
          sx={{
            color: colors.light,
            fontSize: { xs: 18, md: 20 },
          }}
        />
      </Box>
      Contacto
    </Button>
  );
}
