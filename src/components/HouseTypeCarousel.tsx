"use client";

import { useState, useEffect } from "react";
import { Box, IconButton, Typography, Tooltip } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Image from "next/image";
import { colors } from "@/theme/theme";

interface HouseTypeCarouselProps {
  projectId: string;
  houseTypeIndex: number;
  totalImages: number;
}

export default function HouseTypeCarousel({
  projectId,
  houseTypeIndex,
  totalImages,
}: HouseTypeCarouselProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);

  // Reset to first image when house type changes
  useEffect(() => {
    setActiveStep(0);
  }, [houseTypeIndex]);

  // Hide tooltip after 5 seconds

  // Return null if no images
  if (!totalImages || totalImages === 0) {
    return (
      <Box
        sx={{
          width: "100%",
          height: { xs: "300px", sm: "400px", md: "500px" },
          borderRadius: 2,
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" color="text.secondary">
          No hay imágenes disponibles
        </Typography>
      </Box>
    );
  }

  const handleNext = () => {
    if (showTooltip) setShowTooltip(false);
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % totalImages);
  };

  const handleBack = () => {
    if (showTooltip) setShowTooltip(false);
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? totalImages - 1 : prevActiveStep - 1
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "350px", sm: "450px", md: "550px" },
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Images */}
      {Array.from({ length: totalImages }).map((_, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: activeStep === index ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <Image
            src={`/images/proyectos/${projectId}/${houseTypeIndex}/${index}.webp`}
            alt={`House Type ${houseTypeIndex + 1} - Image ${index + 1}`}
            fill
            style={{ objectFit: "contain" }}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>
      ))}

      {/* Navigation buttons - invisible but clickable on mobile */}
      <IconButton
        onClick={handleBack}
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: { xs: "50%", md: "auto" },
          height: "100%",
          transform: "none",
          backgroundColor: { xs: "transparent", md: colors.light },
          color: { xs: "transparent", md: colors.primary },
          "&:hover": {
            backgroundColor: { xs: "transparent", md: colors.secondary },
            color: { xs: "transparent", md: colors.light },
            boxShadow: { xs: "none", md: "0 6px 20px rgba(0, 0, 0, 0.25)" },
          },
          transition: "all 0.3s ease",
          zIndex: 10,
          borderRadius: 0,
        }}
      >
        <KeyboardArrowLeft sx={{ display: { xs: "none", md: "block" } }} />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          width: { xs: "50%", md: "auto" },
          height: "100%",
          transform: "none",
          backgroundColor: { xs: "transparent", md: colors.light },
          color: { xs: "transparent", md: colors.primary },
          "&:hover": {
            backgroundColor: { xs: "transparent", md: colors.secondary },
            color: { xs: "transparent", md: colors.light },
            boxShadow: { xs: "none", md: "0 6px 20px rgba(0, 0, 0, 0.25)" },
          },
          transition: "all 0.3s ease",
          zIndex: 10,
          borderRadius: 0,
        }}
      >
        <KeyboardArrowRight sx={{ display: { xs: "none", md: "block" } }} />
      </IconButton>

      {/* Temporary tooltip for mobile users */}
      {showTooltip && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            px: 2,
            py: 1,
            borderRadius: 1,
            zIndex: 20,
            display: { xs: "block", md: "none" },
          }}
        >
          <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
            Toca los lados para navegar
          </Typography>
        </Box>
      )}

      {/* Image counter */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          px: 2,
          py: 0.5,
          borderRadius: 1,
          zIndex: 10,
        }}
      >
        <Typography variant="body2">
          {activeStep + 1} / {totalImages}
        </Typography>
      </Box>
    </Box>
  );
}
