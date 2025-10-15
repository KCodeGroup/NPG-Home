import { Box, Typography, Stack, Grid } from "@mui/material";
import Carousel from "@/components/Carousel";
import ProjectCardGrid from "@/components/ProjectCardGrid";

export default function Home() {
  return (
    <Box>
      <Carousel />
      <Stack
        direction="row"
        justifyContent="center"
        gap={15}
        alignItems="center"
        sx={{ py: 4, pl: { xs: 2, sm: 4, md: 15 }, pr: { xs: 2, sm: 4 } }}
      >
        <Typography variant="h4" fontWeight={700}>
          ¿Listo para hacer realidad tu sueño?
        </Typography>
        <Typography variant="body1" fontWeight={400}>
          Te acompañamos en cada paso del proceso con atención personalizada y
          compromiso, para que encuentres mucho más que un inmueble: el espacio
          ideal para ti.
        </Typography>
      </Stack>
      <ProjectCardGrid />
    </Box>
  );
}
