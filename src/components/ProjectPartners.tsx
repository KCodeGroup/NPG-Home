import { Stack, Typography, Grid } from "@mui/material";

interface ProjectPartnersProps {
  partners: {
    name: string;
    role: string;
  }[];
}

export default function ProjectPartners({ partners }: ProjectPartnersProps) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        Socios del Proyecto
      </Typography>
      <Grid container spacing={2}>
        {partners.map((partner) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={partner.name}
            component="div"
          >
            <Typography variant="body1" fontWeight={500}>
              {partner.role}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
