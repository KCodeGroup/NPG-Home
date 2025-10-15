import { Box, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";
import projects from "../../public/texts/projects.json";

export default function ProjectCardGrid() {
  return (
    <Box
      sx={{ mt: 2, width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Grid
        container
        width="60%"
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 1 }}
      >
        {projects.map((project) => (
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
