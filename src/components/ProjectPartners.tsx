import { Stack, Typography, Box, Grid, SxProps } from "@mui/material";
import PartnerCard from "./PartnerCard";

interface ProjectPartnersProps {
  sx?: SxProps;
  partners: {
    nombre: string;
    role: string;
  }[];
}

export default function ProjectPartners({
  sx,
  partners,
}: ProjectPartnersProps) {
  return (
    <Stack spacing={3} mt={5} sx={sx}>
      <Typography variant="h4" fontWeight={700} textAlign="center">
        Socios del Proyecto
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 3 },
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
        }}
      >
        <Grid
          container
          spacing={{ xs: 1.5, sm: 2, md: 1.5 }}
          sx={{ width: "100%" }}
          justifyContent="center"
          alignItems="center"
        >
          {partners.map((partner) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 2.4, lg: 2, xl: 1.7 }}
              key={partner.nombre}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <PartnerCard partner={partner} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}
