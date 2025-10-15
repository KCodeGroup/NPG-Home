"use client";

import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { Phone } from "@mui/icons-material";
import Image from "next/image";
import { colors } from "@/theme/theme";
import { Project } from "@/types/project";

interface FinancingCardProps {
  financing: Project["financiacion"];
  project: Project;
}

export default function FinancingCard({
  financing,
  project,
}: FinancingCardProps) {
  return (
    <Card
      sx={{
        width: { xs: "95%", sm: "85%", md: "75%", lg: "65%" },
        position: "relative",
        borderRadius: 3,
        overflow: "visible",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.18)",
        },
      }}
    >
      {/* Floating Title */}
      <Box
        sx={{
          position: "absolute",
          top: -25,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: colors.primary,
          borderRadius: 2,
          px: 3,
          py: 1,
          zIndex: 10,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{
            color: colors.light,
            textAlign: "center",
          }}
        >
          Financiación
        </Typography>
      </Box>

      {/* Content Section */}
      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,
          p: { xs: 3, sm: 4, md: 5 },
          backgroundColor: "#EFEFEF",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          minHeight: { xs: "280px", sm: "320px", md: "350px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Main Financial Info */}
        <Box
          sx={{
            textAlign: "center",
            mt: 2,
            mb: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            mb={1}
            sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
          >
            Lotes desde:
          </Typography>
          <Typography
            variant="h3"
            fontWeight={700}
            color="text.primary"
            mb={1}
            sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
          >
            ${financing.lotesDesde}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
          >
            y {project.m2}
          </Typography>
        </Box>

        {/* Responsive Layout using Flexbox */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, sm: 3 },
            mb: { xs: 2, sm: 3 },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          {/* Left Column - Cuota Inicial */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              flex: { xs: "1", md: "1" },
              minWidth: { xs: "100%", md: "200px" },
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              mb={1}
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              Cuota Inicial
            </Typography>
            <Typography
              variant="h2"
              fontWeight={700}
              color="text.primary"
              mb={1}
              sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" } }}
            >
              {financing.cuotaInicial}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              mb={1}
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              Separa tu lote por
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              color="text.primary"
              sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}
            >
              ${financing.separaTuLotePor}
            </Typography>
          </Box>

          {/* Center Column - Spacer (hidden on mobile) */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              flex: "1",
            }}
          />

          {/* Right Column - Financiación */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "right" },
              flex: { xs: "1", md: "1" },
              minWidth: { xs: "100%", md: "200px" },
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              mb={1}
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              Financiación
            </Typography>
            <Typography
              variant="h2"
              fontWeight={700}
              color="text.primary"
              mb={1}
              sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" } }}
            >
              {financing.financiacion}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              mb={1}
              sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            >
              Precio por m²
            </Typography>
            <Typography
              variant="h5"
              fontWeight={600}
              color="text.primary"
              sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }}
            >
              ${financing.precioPorM2Desde}
            </Typography>
          </Box>
        </Box>
      </CardContent>

      {/* Background Image with CTA Button */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "150px", sm: "180px", md: "200px" },
          overflow: "hidden",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <Image
          src={`/images/carrousel/${project.id}.webp`}
          alt="Financing Background"
          fill
          style={{
            objectFit: "cover",
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
          }}
        />
        {/* CTA Button */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 15, sm: 20 },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        >
          <Button
            variant="contained"
            startIcon={<Phone />}
            sx={{
              backgroundColor: colors.primary,
              borderRadius: 2,
              px: { xs: 2, sm: 3 },
              py: { xs: 0.5, sm: 1 },
              textTransform: "none",
              fontWeight: 600,
              fontSize: { xs: "0.875rem", sm: "1rem" },
              "&:hover": {
                backgroundColor: colors.dark,
              },
            }}
          >
            Financia aquí
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
