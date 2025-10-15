import { Box, Grid } from "@mui/material";
import Image from "next/image";

export default function HomeGrid() {
  return (
    <Box width="80%">
      <Grid container>
        <Grid size={6}>
          <Image src="/images/home/home-grid-1.webp" alt="Home Grid 1" fill />
        </Grid>
        <Grid size={6}>
          <Image src="/images/home/home-grid-2.webp" alt="Home Grid 2" fill />
        </Grid>
        <Grid size={12}>
          <Image src="/images/home/home-grid-3.webp" alt="Home Grid 3" fill />
        </Grid>
      </Grid>
    </Box>
  );
}
