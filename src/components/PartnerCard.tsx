"use client";

import { Box, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { colors } from "@/theme/theme";

interface PartnerCardProps {
  partner: {
    nombre: string;
    role: string;
  };
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <Card
      sx={{
        borderRadius: 1.5,
        overflow: "hidden",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: { xs: "200px", sm: "180px", md: "160px" },
        width: "100%",
      }}
    >
      {/* Partner Image */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "80px", sm: "90px", md: "100px" },
          overflow: "hidden",
        }}
      >
        <Image
          src={`/images/partners/${partner.nombre}.svg`}
          alt={`${partner.nombre} - ${partner.role}`}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
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
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
          }}
        />
      </Box>

      {/* Partner Info */}
      <CardContent
        sx={{
          p: { xs: 1, sm: 1.5 },
          backgroundColor: colors.primary,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          fontWeight={600}
          color={colors.light}
          mb={0.25}
          sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}
        >
          {partner.nombre}
        </Typography>
        <Typography
          variant="caption"
          color={colors.light}
          sx={{ fontSize: { xs: "0.625rem", sm: "0.75rem" } }}
        >
          {partner.role}
        </Typography>
      </CardContent>
    </Card>
  );
}
