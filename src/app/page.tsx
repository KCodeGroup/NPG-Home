import { Typography, Stack } from "@mui/material";
import Carousel from "@/components/Carousel";
import ProjectCardGrid from "@/components/ProjectCardGrid";
import HomeGrid from "@/components/HomeGrid";

export default function Home() {
  return (
    <Stack gap={5} alignItems="center" justifyContent="center">
      <Carousel />
      <Stack
        direction="row"
        justifyContent="center"
        gap={{ xs: 5, md: 10 }}
        alignItems="center"
        width="80%"
      >
        <Typography
          variant="h4"
          fontWeight={700}
          fontSize={{ xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }}
        >
          ¿Listo para hacer realidad tu sueño?
        </Typography>
        <Typography
          variant="body1"
          fontWeight={400}
          fontSize={{ xs: "0.9rem", sm: "1.25rem", md: "1.25rem" }}
        >
          Te acompañamos en cada paso del proceso con atención personalizada y
          compromiso, para que encuentres mucho más que un inmueble: el espacio
          ideal para ti.
        </Typography>
      </Stack>
      <ProjectCardGrid />
      <Stack
        sx={{
          width: "80%",
          gap: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          Creamos espacios que reflejan sueños, visión y confianza
        </Typography>
        <Typography variant="body1" fontWeight={400}>
          Combinamos diseño, experiencia y asesoría personalizada para ofrecer
          soluciones inmobiliarias que conectan con tus aspiraciones.
          Convertimos tus sueños en proyectos reales, donde cada detalle refleja
          confianza y visión.
        </Typography>
      </Stack>
      {/* <HomeGrid /> */}
      <Stack
        sx={{
          width: "80%",
          gap: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          mb: 5,
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          Estás a pocos pasos de alcanzar tus sueños
        </Typography>
        <Typography variant="body1" fontWeight={400}>
          Escríbenos y déjanos crear el espacio perfecto para ti, donde la
          confianza y la visión se vuelven realidad.
        </Typography>
      </Stack>
    </Stack>
  );
}
