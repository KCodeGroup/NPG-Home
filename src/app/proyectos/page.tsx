import { Stack, Box, Typography } from "@mui/material";
import ProjectCardGrid from "@/components/ProjectCardGrid";
import BookBox from "@/components/BookBox";
import CTATextSection from "@/components/CTATextSection";

export default function Proyectos() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%), url(/images/proyectos/portada.webp)`,
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
            Proyectos
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
            }}
          >
            Nuestros Desarrollos
          </Typography>
        </Box>
      </Box>
      <Box width="65%" height="188px" position="relative">
        <Box
          width="100%"
          height="100%"
          sx={{
            position: "absolute",
            top: -25,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <BookBox />
        </Box>
      </Box>
      <CTATextSection
        width="65%"
        title="Nuestro alcance"
        description="La confianza en tu inversión comienza con la ubicación. Contamos con mas de 30 proyectos localizados en ubicaciones que garantizaran la plusvalía de tu inversión."
        sx={{
          my: 5,
        }}
      />
      <ProjectCardGrid />
      <CTATextSection
        width="65%"
        title="Creamos espacios que reflejan sueños, visión y confianza"
        description="Combinamos diseño, experiencia y asesoría personalizada para ofrecer soluciones inmobiliarias que conectan con tus aspiraciones. Convertimos tus sueños en proyectos reales, donde cada detalle refleja confianza y visión."
        sx={{
          my: 10,
        }}
      />
    </Stack>
  );
}
