"use client";

import { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Image from "next/image";

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

  // Reset to first image when house type changes
  useEffect(() => {
    setActiveStep(0);
  }, [houseTypeIndex]);

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
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % totalImages);
  };

  const handleBack = () => {
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
        backgroundColor: "#f5f5f5",
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
            style={{ objectFit: "cover" }}
          />
        </Box>
      ))}

      {/* Navigation buttons */}
      <IconButton
        onClick={handleBack}
        sx={{
          position: "absolute",
          left: { xs: 10, sm: 20 },
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
          zIndex: 10,
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: { xs: 10, sm: 20 },
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          color: "white",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
          zIndex: 10,
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

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
