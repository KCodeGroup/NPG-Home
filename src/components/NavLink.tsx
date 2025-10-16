"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = memo(function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Button
      component={Link}
      href={href}
      prefetch={true}
      sx={{
        color: isActive ? "#BD8353" : "#F9EBDC",
        fontSize: { xs: "0.875rem", md: "1rem" },
        fontWeight: isActive ? 600 : 400,
        textTransform: "none",
        px: { xs: 1.5, md: 2 },
        py: 1,
        borderRadius: "4px",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: isActive ? "80%" : "0%",
          height: "2px",
          backgroundColor: "#BD8353",
          transition: "width 0.3s ease",
        },
        "&:hover": {
          color: "#BD8353",
          backgroundColor: "rgba(189, 131, 83, 0.1)",
          "&::after": {
            width: "80%",
          },
        },
        transition: "all 0.3s ease",
      }}
    >
      {label}
    </Button>
  );
});

export default NavLink;
