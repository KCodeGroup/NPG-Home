import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Link, Typography, Stack, IconButton } from "@mui/material";
import Image from "next/image";
import { colors } from "@/theme/theme";

export default function Footer() {
  return (
    <Stack>
      <Box
        component="footer"
        sx={{
          width: "100%",
          maxHeight: "450px",
          height: "450px",
          position: "relative",
          mt: "auto",
        }}
      >
        <Image
          src="/images/footer.webp"
          alt="NPG Home footer"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Stack
        sx={{
          backgroundColor: colors.primary,
          color: colors.light,
          alignItems: "center",
          pt: 2,
        }}
      >
        <Typography>Contactanos</Typography>
        <Typography>+57 317 823 4567</Typography>
        <Typography>info@npghome.com</Typography>
        <Stack direction="row" gap={2} alignItems="center">
          <IconButton>
            <Link href="/">
              <WhatsAppIcon sx={{ color: colors.light }} />
            </Link>
          </IconButton>
          <IconButton>
            <Link href="/">
              <InstagramIcon sx={{ color: colors.light }} />
            </Link>
          </IconButton>
          <IconButton>
            <Link href="/">
              <LinkedInIcon sx={{ color: colors.light }} />
            </Link>
          </IconButton>
        </Stack>
      </Stack>
      <Typography
        sx={{ backgroundColor: colors.dark, color: colors.light }}
        textAlign="center"
      >
        &copy; {new Date().getFullYear()} NPG Home. Todos los derechos
        reservados.
      </Typography>
    </Stack>
  );
}
