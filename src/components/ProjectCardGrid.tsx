"use client";

import { useState } from "react";
import { Box, Grid, Tabs, Tab } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { Project, TipoProyecto } from "@/types/project";
import projects from "../../public/texts/projects.json";

type FilterType = "todos" | TipoProyecto;

export default function ProjectCardGrid() {
  const [filter, setFilter] = useState<FilterType>("todos");

  const handleFilterChange = (
    _event: React.SyntheticEvent,
    newValue: FilterType
  ) => {
    setFilter(newValue);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === "todos") return true;
    return project.tipo === filter;
  });

  return (
    <Box
      sx={{
        mt: 2,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Tabs
        value={filter}
        onChange={handleFilterChange}
        sx={{
          mb: 4,
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
        <Tab label="Todos" value="todos" />
        <Tab label="Residencial" value="residencial" />
        <Tab label="Playa" value="playa" />
        <Tab label="Campestre" value="campestre" />
      </Tabs>

      <Grid
        container
        width={{ xs: "90%", md: "65%" }}
        rowSpacing={4}
        columnSpacing={0}
      >
        {filteredProjects.map((project) => (
          <Grid
            size={{ xs: 12, md: 6 }}
            key={project.id}
            display="flex"
            justifyContent="center"
          >
            <ProjectCard project={project as Project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
