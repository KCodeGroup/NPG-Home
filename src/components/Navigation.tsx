'use client';

import { AppBar, Container, Toolbar } from '@mui/material';
import NavLink from './NavLink';
import LogoButton from './LogoButton';
import ContactButton from './ContactButton';
import theme from '@/theme/theme';
import Link from 'next/link';

const { palette } = theme;

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navigation() {
  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: palette.primary.main,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: { xs: 64, md: 80 },
            justifyContent: 'space-between',
            borderBottom: `1px solid ${palette.primary.light}33`, // 33 = 20% opacity
          }}
        >
          <Link href="/" style={{ textDecoration: 'none', display: 'flex' }}>
            <LogoButton
              imagePath="/images/logo.svg"
              alt="NPG Home"
              width={150}
              height={60}
            />
          </Link>
          <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </Container>
          <ContactButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
