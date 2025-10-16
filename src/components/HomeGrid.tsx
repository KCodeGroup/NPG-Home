"use client";

import { Box, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

export default function HomeGrid() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width="80%" mt={5}>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={0}
        alignItems="center"
        justifyContent="center"
      >
        {/* First row - 2 images side by side */}
        {!isMobile ? (
          <>
            <Grid size={6} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "75%",
                  height: "350px",
                  borderRadius: "20px",
                }}
              >
                <Image
                  src="/images/home/home-grid-1.webp"
                  alt="Home Grid 1"
                  fill
                  style={{
                    objectFit: "fill",
                    borderRadius: "20px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    position: "absolute",
                    top: -60,
                    left: 0,
                  }}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Box>
            </Grid>

            <Grid size={6} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  position: "relative",
                  width: "75%",
                  height: "350px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image
                  src="/images/home/home-grid-2.webp"
                  alt="Home Grid 2"
                  fill
                  style={{
                    objectFit: "fill",
                    borderRadius: "20px",
                  }}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Box>
            </Grid>
          </>
        ) : null}

        {/* Second row - 1 full width image */}
        <Grid size={12}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "250px", sm: "300px", md: "500px" },
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/home/home-grid-3.webp"
              alt="Home Grid 3"
              fill
              style={{ objectFit: "fill" }}
              loading="lazy"
              sizes="100vw"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
