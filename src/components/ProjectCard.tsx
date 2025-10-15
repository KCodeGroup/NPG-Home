import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import { Project } from "@/types/project";
import Box from "@mui/material/Box";
import { colors } from "@/theme/theme";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export default function MultiActionAreaCard({ project }: ProjectCardProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "90%", sm: "65%", md: "90%" },
        mb: 3,
        "&:hover > *": { transform: "scale(1.02)" },
        "&:hover .button-text::after": {
          content: '" →"',
        },
      }}
    >
      <Link
        href={`/proyectos/${project.id}`}
        style={{ textDecoration: "none" }}
      >
        <Card
          sx={{
            backgroundColor: "#EDEDED",
            borderRadius: "15px",
            transition: "all 0.3s ease",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={`/images/cards/${project.id}.webp`}
              alt={project.nombre}
              sx={{
                borderRadius: "10px",
                height: "230px",
                objectFit: "cover",
              }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                pb: 4,
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontWeight={700}
                fontSize="1.25rem"
                sx={{ color: "text.dark", textAlign: "center" }}
              >
                {project.nombre}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.grey", textAlign: "center" }}
              >
                Lotes desde ${project.financiacion.lotesDesde} COP
              </Typography>
              <Box
                width={{ xs: "90%", sm: "65%", md: "90%" }}
                sx={{
                  backgroundColor: "#DDDDDD",
                  borderRadius: "15px",
                  padding: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 1.5,
                  mb: 2,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ color: "text.grey", textAlign: "center" }}
                >
                  {project.ubicacion.ciudad}, {project.ubicacion.departamento} •{" "}
                  {project.m2}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Link
        href={`/proyectos/${project.id}`}
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "all 0.3s ease",
            backgroundColor: colors.primary,
            color: "white",
            borderRadius: "20px",
            px: 4,
            py: 0.5,
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#0a1827",
            },
          }}
          disableElevation
        >
          <Box
            component="span"
            className="button-text"
            sx={{
              display: "inline-block",
              "&::after": {
                content: '""',
                transition: "all 0.2s ease",
              },
            }}
          >
            Ver más
          </Box>
        </Button>
      </Link>
    </Box>
  );
}
