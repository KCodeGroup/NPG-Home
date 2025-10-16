"use client";

import { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NavLink from "./NavLink";
import LogoButton from "./LogoButton";
import ContactButton from "./ContactButton";
import theme from "@/theme/theme";
import Link from "next/link";
import { CONTACT_INFO } from "@/utils/contactInfo";

const { palette } = theme;

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
  // { href: "/sobre-nosotros", label: "Sobre Nosotros" },
];

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

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{ textDecoration: "none", display: "flex" }}
          onClick={handleDrawerToggle}
        >
          <LogoButton
            imagePath="/images/logo.svg"
            alt="NPG Home"
            width={120}
            height={48}
          />
        </Link>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: palette.primary.contrastText }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: `${palette.primary.light}33` }} />

      <List sx={{ flexGrow: 1, pt: 2 }}>
        {navLinks.map((link) => (
          <ListItem key={link.href} sx={{ px: 0 }}>
            <Link
              href={link.href}
              onClick={handleDrawerToggle}
              style={{
                textDecoration: "none",
                width: "100%",
                padding: "12px 24px",
                display: "block",
                color: palette.primary.contrastText,
                fontSize: "1.1rem",
                transition: "all 0.3s ease",
              }}
            >
              {link.label}
            </Link>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: `${palette.primary.light}33` }} />

      <Box sx={{ p: 3 }}>
        <Typography
          variant="body2"
          sx={{ mb: 2, color: palette.primary.contrastText, opacity: 0.8 }}
        >
          Síguenos en:
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mb: 3,
          }}
        >
          {socialLinks.map((social) => (
            <IconButton
              key={social.label}
              component="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: palette.primary.contrastText,
                "&:hover": {
                  backgroundColor: social.color,
                  transform: "scale(1.1)",
                },
                transition: "all 0.3s ease",
              }}
            >
              <social.icon />
            </IconButton>
          ))}
        </Box>

        <Typography
          variant="caption"
          sx={{
            color: palette.primary.contrastText,
            opacity: 0.6,
            display: "block",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} NPG Home
          <br />
          Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: palette.primary.main,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: 80 },
              justifyContent: "space-between",
              borderBottom: `1px solid ${palette.primary.light}33`,
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{ textDecoration: "none", display: "flex", zIndex: 1 }}
            >
              <LogoButton
                imagePath="/images/logo.svg"
                alt="NPG Home"
                width={150}
                height={60}
              />
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                    />
                  ))}
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ContactButton />
                </Box>
              </>
            )}

            {/* Mobile Hamburger Menu */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: palette.primary.contrastText,
                  zIndex: 1,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
