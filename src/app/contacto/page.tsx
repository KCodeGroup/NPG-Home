"use client";

import { Stack, Box, Typography, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import { colors } from "@/theme/theme";
import { CONTACT_INFO } from "@/utils/contactInfo";

export default function Contacto() {
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
    <Stack alignItems="center" justifyContent="center">
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%), url(/images/contacto.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 50, sm: 70 },
            left: { xs: 20, sm: 40, md: 60 },
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem",
              },
              mb: 1,
            }}
          >
            Contáctanos
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
            }}
          >
            Realiza tus sueños y ponte en contacto con nosotros.
          </Typography>
        </Box>
      </Box>

      {/* Contact Form Section */}
      <Grid container spacing={0} sx={{ width: "100%" }}>
        <Grid size={{ xs: 12 }} sx={{ width: "100%", mt: 5 }}>
          {/* Contact Information */}
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                color: "#1a1a1a",
                mb: 3,
              }}
            >
              Información de contacto
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={4}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                📞 {CONTACT_INFO.phone}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                ✉️ {CONTACT_INFO.email}
              </Typography>
            </Stack>
          </Box>
        </Grid>
        {/* Formulario de contacto */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              py: { xs: 2, md: 6 },
              px: { xs: 3, sm: 4, md: 6 },
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                maxWidth: "800px",
                mx: "auto",
              }}
            >
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
                Envíanos un mensaje
              </Typography>

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
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
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
          </Box>
        </Grid>
        {/* Google Maps and Contact Information */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              pt: 6,
              px: { xs: 3, sm: 4, md: 6 },
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              {/* Google Maps */}
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
                Nuestra ubicación
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: { xs: "300px", sm: "400px", md: "500px" },
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  mb: 4,
                }}
              >
                <iframe
                  id="map-canvas"
                  className="map_part"
                  width="100%"
                  height="100%"
                  src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=plaza santorini, manga, cartagena, bolivar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
