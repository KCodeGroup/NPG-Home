"use client";

import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";
import { colors } from "@/theme/theme";
import { CONTACT_INFO } from "@/utils/contactInfo";

interface ContactFormProps {
  title?: string;
  showTitle?: boolean;
  sx?: any;
}

export default function ContactForm({
  title = "Envíanos un mensaje",
  showTitle = true,
  sx = {},
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: event.target.value,
      });
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `Hola! Me interesa contactar con ustedes.

*Información de contacto:*
• Nombre: ${formData.fullName}
• Email: ${formData.email}
• Teléfono: ${formData.phone}

*Mensaje:*
${formData.message}

¡Espero su respuesta!`;

    // WhatsApp phone number
    const whatsappNumber = CONTACT_INFO.whatsappNumber;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box sx={{ ...sx }}>
      {showTitle && (
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 600,
            color: "#1a1a1a",
            mb: 4,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: "#f8f9fa",
          borderRadius: 2,
          p: 4,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Stack spacing={3}>
          {/* Full Name */}
          <TextField
            fullWidth
            label="Nombre completo"
            value={formData.fullName}
            onChange={handleInputChange("fullName")}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
                borderRadius: 1,
              },
            }}
          />

          {/* Email */}
          <TextField
            fullWidth
            label="Correo electrónico"
            type="email"
            value={formData.email}
            onChange={handleInputChange("email")}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
                borderRadius: 1,
              },
            }}
          />

          {/* Phone */}
          <TextField
            fullWidth
            label="Número de teléfono"
            value={formData.phone}
            onChange={handleInputChange("phone")}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
                borderRadius: 1,
              },
            }}
          />

          {/* Message */}
          <TextField
            fullWidth
            label="Mensaje"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleInputChange("message")}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
                borderRadius: 1,
              },
            }}
          />

          {/* Submit Button */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: colors.primary,
                color: colors.light,
                borderRadius: "45px",
                px: 6,
                py: 1.5,
                fontWeight: 600,
                fontSize: { xs: "0.875rem", md: "1rem" },
                "&:hover": {
                  backgroundColor: colors.secondary,
                },
              }}
            >
              Enviar por WhatsApp
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
