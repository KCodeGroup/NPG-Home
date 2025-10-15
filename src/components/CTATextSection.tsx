import { Stack, Typography, SxProps } from "@mui/material";

interface CTATextSectionProps {
  title: string;
  description: string;
  width?: string;
  sx?: SxProps;
}

export default function CTATextSection({
  title,
  description,
  width = "80%",
  sx,
}: CTATextSectionProps) {
  return (
    <Stack
      sx={{
        width,
        gap: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mb: 5,
        ...sx,
      }}
    >
      <Typography variant="h4" fontWeight={700}>
        {title}
      </Typography>
      <Typography variant="body1" fontWeight={400}>
        {description}
      </Typography>
    </Stack>
  );
}
