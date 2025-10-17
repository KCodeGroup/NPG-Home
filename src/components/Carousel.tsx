"use client";

import { useState, useEffect } from "react";
import { Box, IconButton, Typography, MobileStepper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Link from "next/link";

interface CarouselItem {
  id: string;
  title: string;
  location: string;
  subtitle: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: "la-bendicion-club-house",
    title: "La Bendición Club House",
    location: "Arjona, Bolívar",
    subtitle: "Arjona, Bolívar",
  },
  {
    id: "la-reserva-campestre",
    title: "La Reserva Campestre",
    location: "Barranquilla, Atlántico",
    subtitle: "Barranquilla, Atlántico",
  },
  {
    id: "simaruba-beach-club",
    title: "Simaruba Beach Club",
    location: "Cartagena, Bolívar",
    subtitle: "Cartagena, Bolívar",
  },
  {
    id: "luwana-alma-beach",
    title: "Luwana Alma Beach",
    location: "Cartagena, Bolívar",
    subtitle: "Cartagena, Bolívar",
  },
];

export default function Carousel() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carouselItems.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  // Auto-advance carousel every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(timer);
  }, [activeStep]);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
        overflow: "hidden",
      }}
    >
      {carouselItems.map((item, index) => (
        <Link
          key={item.id}
          href={`/proyectos/${item.id}`}
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: activeStep === index ? 1 : 0,
              transition:
                "opacity 0.8s ease-in-out, transform 0.3s ease-in-out",
              pointerEvents: activeStep === index ? "auto" : "none",
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%), url(/images/carrousel/${item.id}.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
              //   "&:hover": {
              //     transform: "scale(1.02)",
              //   },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: 60, sm: 80 },
                left: { xs: 20, sm: 40, md: 60 },
                color: "white",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2.5rem",
                    lg: "3rem",
                  },
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                }}
              >
                {item.location}
              </Typography>
              {/* <Typography
                variant="h6"
                component="p"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                }}
              >
                {item.subtitle}
              </Typography> */}
            </Box>
          </Box>
        </Link>
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

      {/* Stepper indicator */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "transparent",
          "& .MuiMobileStepper-dot": {
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "white",
          },
        }}
        nextButton={<></>}
        backButton={<></>}
      />
    </Box>
  );
}
