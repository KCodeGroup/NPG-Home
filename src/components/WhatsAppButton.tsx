"use client";

import { Fab, Tooltip } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { colors } from "@/theme/theme";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // TODO: Add WhatsApp redirect functionality
    console.log("WhatsApp button clicked");
  };

  return (
    <Tooltip
      title="Comunicate directamente con nuestros asesores via Whatsapp"
      placement="left"
      arrow
    >
      <Fab
        color="primary"
        aria-label="whatsapp"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: colors.secondary, // Gold/Bronze from web palette
          color: colors.light, // Cream text
          "&:hover": {
            backgroundColor: colors.primary, // Dark blue on hover
            color: colors.light,
            transform: "scale(1.05)",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
          },
          zIndex: 1000, // High z-index to stay above all content
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          transition: "all 0.3s ease",
        }}
        onClick={handleWhatsAppClick}
      >
        <WhatsApp />
      </Fab>
    </Tooltip>
  );
}
