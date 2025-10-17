"use client";

import { Fab, Tooltip } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import { colors } from "@/theme/theme";
import { CONTACT_INFO } from "@/utils/contactInfo";
import { useProject } from "./ProjectContext";

export default function WhatsAppButton() {
  const { currentProject } = useProject();
  const handleWhatsAppClick = () => {
    let message: string;

    if (currentProject) {
      // Custom message for specific project
      message = `Hola! Estoy interesado en el proyecto *${currentProject.nombre}* en ${currentProject.ubicacion.ciudad}, ${currentProject.ubicacion.departamento}. Me gustaría conocer más detalles sobre este desarrollo.`;
    } else {
      // Default message for general inquiries
      message =
        "Hola! Me interesa conocer más sobre sus proyectos inmobiliarios.";
    }

    const whatsappUrl = `https://wa.me/${
      CONTACT_INFO.whatsappNumber
    }?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Tooltip
      title={
        currentProject
          ? `Consulta sobre ${currentProject.nombre} via WhatsApp`
          : "Comunicate directamente con nuestros asesores via Whatsapp"
      }
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
