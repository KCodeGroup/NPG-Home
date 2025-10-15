import { Box, Typography } from "@mui/material";
import { colors } from "@/theme/theme";
import MainButton from "./MainButton";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";

export default function BookBox() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#EFEFEF",
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        pb: 2,
        pt: 8,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -25,
          left: "50%",
          transform: "translateX(-50%)",
          color: colors.light,
          backgroundColor: colors.primary,
          borderRadius: "37px",
          px: 5,
          py: 1,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          fontSize={{ xs: "1rem", md: "1.25rem" }}
          textAlign="center"
        >
          Solicitar asesoría
        </Typography>
      </Box>
      <Typography variant="body1" fontWeight={400} textAlign="center">
        Agenda facilmente un cita y déjanos mostrarte por qué nuestros proyectos
        son la elección perfecta para tu próximo capítulo.
      </Typography>
      <MainButton
        variant="contained"
        href="/contacto"
        icon={<ClassOutlinedIcon />}
        sx={{
          px: 2,
          py: 1,
          fontSize: { xs: "0.875rem", md: "1rem" },
          borderRadius: "45px",
          backgroundColor: colors.primary,
        }}
      >
        Agendar ahora
      </MainButton>
    </Box>
  );
}
