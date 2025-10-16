import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Link, Typography, Stack, IconButton } from "@mui/material";
import Image from "next/image";
import { colors } from "@/theme/theme";
import { CONTACT_INFO } from "@/utils/contactInfo";

export default function Footer() {
  const socialLinks = [
    {
      icon: FacebookIcon,
      href: CONTACT_INFO.facebookUrl,
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: InstagramIcon,
      href: CONTACT_INFO.instagramUrl,
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: LinkedInIcon,
      href: CONTACT_INFO.linkedinUrl,
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: WhatsAppIcon,
      href: `https://wa.me/${CONTACT_INFO.whatsappNumber}`,
      label: "WhatsApp",
      color: "#25D366",
    },
  ];
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
        <Typography>{CONTACT_INFO.phone}</Typography>
        <Typography>{CONTACT_INFO.email}</Typography>
        <Stack direction="row" gap={2} alignItems="center">
          {socialLinks.map((social) => (
            <IconButton key={social.label}>
              <Link href={social.href}>
                <social.icon sx={{ color: colors.light }} />
              </Link>
            </IconButton>
          ))}
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
