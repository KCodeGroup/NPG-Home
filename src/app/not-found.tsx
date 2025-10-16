import { Stack, Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Stack alignItems="center" justifyContent="center">
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "400px", sm: "500px", md: "600px", lg: "700px" },
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%), url(/images/proyectos/portada.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 404 Content */}
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "4rem",
                sm: "6rem",
                md: "8rem",
                lg: "10rem",
              },
              mb: 2,
              lineHeight: 1,
            }}
          >
            404
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem",
              },
              mb: 2,
            }}
          >
            Página no encontrada
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              component={Link}
              href="/"
              variant="outlined"
              sx={{
                borderColor: "#1a1a1a",
                backgroundColor: "#f5f5f5",
                color: "#1a1a1a",
                px: 3,
                py: 1,
                "&:hover": {
                  backgroundColor: "#1a1a1a",
                  color: "white",
                },
              }}
            >
              Ir al inicio
            </Button>
            <Button
              component={Link}
              href="/proyectos"
              variant="outlined"
              sx={{
                borderColor: "#1a1a1a",
                backgroundColor: "#f5f5f5",
                color: "#1a1a1a",
                px: 3,
                py: 1,
                "&:hover": {
                  backgroundColor: "#1a1a1a",
                  color: "white",
                },
              }}
            >
              Ver proyectos
            </Button>
            <Button
              component={Link}
              href="/contacto"
              variant="outlined"
              sx={{
                borderColor: "#1a1a1a",
                backgroundColor: "#f5f5f5",
                color: "#1a1a1a",
                px: 3,
                py: 1,
                "&:hover": {
                  backgroundColor: "#1a1a1a",
                  color: "white",
                },
              }}
            >
              Contactar
            </Button>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
}
