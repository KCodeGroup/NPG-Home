"use client";

import { Box } from "@mui/material";
import Image from "next/image";

interface LogoButtonProps {
  imagePath: string;
  alt?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function LogoButton({
  imagePath,
  alt = "Logo",
  width = 150,
  height = 60,
  onClick,
}: LogoButtonProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        position: "relative",
        width: { xs: width * 0.7, md: width },
        height: { xs: height * 0.7, md: height },
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          opacity: 0.8,
        },
      }}
    >
      <Image
        src={imagePath}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        priority
        fetchPriority="high"
        sizes="(max-width: 768px) 105px, 150px"
      />
    </Box>
  );
}
