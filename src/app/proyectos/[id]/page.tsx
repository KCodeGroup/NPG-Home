"use client";

import { notFound } from "next/navigation";
import { useState } from "react";
import {
  Stack,
  Box,
  Typography,
  Chip,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Tabs, Tab } from "@mui/material";
import { Project } from "@/types/project";
import projects from "../../../../public/texts/projects.json";
import Image from "next/image";
import amenityIconMap from "@/utils/amenityIcons";
import HouseTypeCarousel from "@/components/HouseTypeCarousel";
import houseCharacteristicMap from "@/utils/houseCharacteristicIcons";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [selectedHouseType, setSelectedHouseType] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const project = projects.find((p) => p.id === params.id) as
    | Project
    | undefined;

  if (!project) {
    notFound();
  }

  // Determine how many amenities to show based on screen size
  const getAmenityLimit = () => {
    if (isMobile) return 4;
    if (isTablet) return 6;
    return 8;
  };

  const amenitiesWithIcons = project.amenidades.filter(
    (amenidad) => amenityIconMap[amenidad]
  );
  const amenitiesWithoutIcons = project.amenidades.filter(
    (amenidad) => !amenityIconMap[amenidad]
  );

  const amenityLimit = getAmenityLimit();
  const displayedAmenities = showAllAmenities
    ? amenitiesWithIcons
    : amenitiesWithIcons.slice(0, amenityLimit);
  const hasMoreAmenities = amenitiesWithIcons.length > amenityLimit;

  return (
    <Stack alignItems="center" justifyContent="center" gap={5} pb={10}>
      {/* Hero Image */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" },
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%), url(/images/carrousel/${project.id}.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 50, sm: 70 },
            left: { xs: 20, sm: 40, md: 60 },
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
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
            {project.nombre}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
            }}
          >
            {project.ubicacion.ciudad}, {project.ubicacion.departamento}
          </Typography>
        </Box>
      </Box>

      {/* Content */}
      <Box width={{ xs: "90%", md: "80%", lg: "70%" }}>
        <Grid container spacing={5}>
          {/* Description */}
          <Grid
            size={6}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Typography
              variant="h6"
              fontWeight={400}
              mb={2}
              sx={{
                color: "#BD8353",
                fontStyle: "italic",
              }}
            >
              "{project.catchPhrase}"
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
              {project.descripcion}
            </Typography>
          </Grid>

          {/* Location Image */}
          <Grid size={12}>
            <Typography variant="h4" fontWeight={700} mb={2}>
              Ubicación
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "350px", sm: "450px", md: "550px" },
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src={`/images/location/${project.id}.webp`}
                alt="Location Image"
                fill
                style={{ objectFit: "fill" }}
              />
            </Box>
          </Grid>

          {/* House Types / Tipos de Casa */}
          <Grid size={12}>
            <Typography variant="h4" fontWeight={700}>
              Tipos de Casa
            </Typography>

            {/* House Type Tabs */}
            <Tabs
              value={selectedHouseType}
              onChange={(_event, newValue) => setSelectedHouseType(newValue)}
              sx={{
                mb: 3,
                "& .MuiTabs-indicator": {
                  backgroundColor: "#BD8353",
                  height: "2px",
                },
                "& .MuiTab-root": {
                  color: "#1A1A1A",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  fontWeight: 400,
                  textTransform: "none",
                  px: { xs: 1.5, md: 2 },
                  py: 1,
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#BD8353",
                    backgroundColor: "rgba(189, 131, 83, 0.1)",
                  },
                  "&.Mui-selected": {
                    color: "#BD8353",
                    fontWeight: 600,
                  },
                },
              }}
            >
              {project.casasTipo.map((casa, index) => (
                <Tab key={index} label={casa.nombre} value={index} />
              ))}
            </Tabs>

            {/* Carousel */}
            <HouseTypeCarousel
              projectId={project.id}
              houseTypeIndex={selectedHouseType}
              totalImages={project.casasTipo[selectedHouseType].totalImages}
            />

            {/* House Type Information */}
            <Box mt={3}>
              <Grid container spacing={2}>
                {/* Area Information */}
                {project.casasTipo[selectedHouseType].areaTotal && (
                  <Grid size={12}>
                    <Stack>
                      <Typography variant="h6" fontWeight={600}>
                        Área Total:
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {project.casasTipo[selectedHouseType].areaTotal}
                      </Typography>
                    </Stack>
                  </Grid>
                )}
                {project.casasTipo[selectedHouseType].areaPiso1 && (
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack>
                      <Typography variant="h6" fontWeight={600}>
                        Piso 1:
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {project.casasTipo[selectedHouseType].areaPiso1}
                      </Typography>
                    </Stack>
                  </Grid>
                )}
                {project.casasTipo[selectedHouseType].areaPiso2 && (
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Stack>
                      <Typography variant="h6" fontWeight={600}>
                        Piso 2:
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {project.casasTipo[selectedHouseType].areaPiso2}
                      </Typography>
                    </Stack>
                  </Grid>
                )}

                {/* Characteristics with Icons */}
                <Grid size={12}>
                  <Typography variant="h6" fontWeight={600} mb={2}>
                    Características
                  </Typography>
                  <Grid container spacing={2}>
                    {Object.entries(
                      project.casasTipo[selectedHouseType].caracteristicas
                    ).map(([key, value]) => {
                      const characteristic = houseCharacteristicMap[key];
                      if (!characteristic || !value) return null;

                      const IconComponent = characteristic.icon;
                      const label =
                        value === 1 && characteristic.singularLabel
                          ? characteristic.singularLabel
                          : characteristic.label;

                      return (
                        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={key}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              p: 1.5,
                              backgroundColor: "rgba(189, 131, 83, 0.05)",
                              borderRadius: 2,
                              border: "1px solid rgba(189, 131, 83, 0.2)",
                            }}
                          >
                            <IconComponent
                              sx={{
                                fontSize: 28,
                                color: "#BD8353",
                              }}
                            />
                            <Box>
                              <Typography
                                variant="body2"
                                sx={{
                                  color: "#1A1A1A",
                                  fontWeight: 600,
                                  fontSize: "1rem",
                                }}
                              >
                                {value}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#666",
                                  fontSize: "0.75rem",
                                }}
                              >
                                {label}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>

                {/* Optional Plant 3 Options */}
                {project.casasTipo[selectedHouseType].opcionesPlanta3 && (
                  <Grid size={12}>
                    <Typography variant="h6" fontWeight={600} mb={2} mt={2}>
                      Opciones Planta 3
                    </Typography>
                    <Grid container spacing={2}>
                      {project.casasTipo[selectedHouseType].opcionesPlanta3
                        ?.opcion1 && (
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Box
                            sx={{
                              p: 2,
                              backgroundColor: "rgba(189, 131, 83, 0.05)",
                              borderRadius: 2,
                              border: "1px solid rgba(189, 131, 83, 0.2)",
                            }}
                          >
                            <Typography
                              variant="subtitle1"
                              fontWeight={600}
                              mb={1}
                            >
                              Opción 1 -{" "}
                              {
                                project.casasTipo[selectedHouseType]
                                  .opcionesPlanta3?.opcion1?.area
                              }
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, m: 0 }}>
                              {project.casasTipo[
                                selectedHouseType
                              ].opcionesPlanta3?.opcion1?.caracteristicas.map(
                                (caracteristica, idx) => (
                                  <Typography
                                    component="li"
                                    variant="body2"
                                    key={idx}
                                  >
                                    {caracteristica}
                                  </Typography>
                                )
                              )}
                            </Box>
                          </Box>
                        </Grid>
                      )}
                      {project.casasTipo[selectedHouseType].opcionesPlanta3
                        ?.opcion2 && (
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Box
                            sx={{
                              p: 2,
                              backgroundColor: "rgba(189, 131, 83, 0.05)",
                              borderRadius: 2,
                              border: "1px solid rgba(189, 131, 83, 0.2)",
                            }}
                          >
                            <Typography
                              variant="subtitle1"
                              fontWeight={600}
                              mb={1}
                            >
                              Opción 2 -{" "}
                              {
                                project.casasTipo[selectedHouseType]
                                  .opcionesPlanta3?.opcion2?.area
                              }
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, m: 0 }}>
                              {project.casasTipo[
                                selectedHouseType
                              ].opcionesPlanta3?.opcion2?.caracteristicas.map(
                                (caracteristica, idx) => (
                                  <Typography
                                    component="li"
                                    variant="body2"
                                    key={idx}
                                  >
                                    {caracteristica}
                                  </Typography>
                                )
                              )}
                            </Box>
                          </Box>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Grid>

          {/* Puntos de Interés */}
          <Grid size={12}>
            <Typography variant="h4" fontWeight={700} mb={2}>
              Puntos de Interés
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {project.puntosDeInteres.map((punto, index) => (
                <Chip
                  key={index}
                  label={punto}
                  sx={{
                    backgroundColor: "rgba(26, 26, 26, 0.1)",
                    color: "#1A1A1A",
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
          </Grid>

          {/* Amenidades */}
          <Grid size={12}>
            <Typography variant="h4" fontWeight={700} mb={3}>
              Amenidades
            </Typography>

            {/* Amenities with icons */}
            <Grid container spacing={2} mb={hasMoreAmenities ? 2 : 3}>
              {displayedAmenities.map((amenidad, index) => {
                const IconComponent = amenityIconMap[amenidad];
                return (
                  <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        p: 2,
                        backgroundColor: "rgba(189, 131, 83, 0.05)",
                        borderRadius: 2,
                        border: "1px solid rgba(189, 131, 83, 0.2)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(189, 131, 83, 0.1)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        },
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: 40,
                          color: "#BD8353",
                          mb: 1,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#1A1A1A",
                          fontWeight: 500,
                          fontSize: "0.85rem",
                        }}
                      >
                        {amenidad}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>

            {/* Show More/Less Button */}
            {hasMoreAmenities && (
              <Box display="flex" justifyContent="center" mb={3}>
                <Button
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  endIcon={
                    showAllAmenities ? <ExpandLessIcon /> : <ExpandMoreIcon />
                  }
                  sx={{
                    color: "#BD8353",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "rgba(189, 131, 83, 0.1)",
                    },
                  }}
                >
                  {showAllAmenities
                    ? "Ver menos"
                    : `Ver ${amenitiesWithIcons.length - amenityLimit} más`}
                </Button>
              </Box>
            )}

            {/* Remaining amenities as chips */}
            {amenitiesWithoutIcons.length > 0 && (
              <Box display="flex" flexWrap="wrap" gap={1}>
                {amenitiesWithoutIcons.map((amenidad, index) => (
                  <Chip
                    key={index}
                    label={amenidad}
                    sx={{
                      backgroundColor: "rgba(189, 131, 83, 0.1)",
                      color: "#BD8353",
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            )}
          </Grid>

          {/* Financiación */}
          <Grid size={12}>
            <Typography variant="h4" fontWeight={700} mb={2}>
              Financiación
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "#F9EBDC",
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Lotes desde
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    ${project.financiacion.lotesDesde} COP
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "#F9EBDC",
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Cuota Inicial
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    {project.financiacion.cuotaInicial}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "#F9EBDC",
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Financiación
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    {project.financiacion.financiacion}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: "#F9EBDC",
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2" color="text.secondary" mb={1}>
                    Separa por
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    ${project.financiacion.separaTuLotePor} COP
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
