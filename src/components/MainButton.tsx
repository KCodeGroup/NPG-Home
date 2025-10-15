'use client';

import { Button, SxProps } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface MainButtonProps {
  sx?: SxProps;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  variant?: 'contained' | 'outlined';
}

export default function MainButton({ 
  children, 
  href, 
  onClick, 
  icon,
  variant = 'contained' 
}: MainButtonProps) {
  const buttonStyles = {
    backgroundColor: variant === 'contained' ? '#BD8353' : 'transparent',
    color: '#F9EBDC',
    fontWeight: 600,
    px: { xs: 2, md: 4 },
    py: { xs: 1, md: 1.5 },
    fontSize: { xs: '0.875rem', md: '1rem' },
    borderRadius: '4px',
    textTransform: 'none' as const,
    border: variant === 'outlined' ? '2px solid #BD8353' : 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    '&:hover': {
      backgroundColor: variant === 'contained' ? '#a67145' : 'rgba(189, 131, 83, 0.1)',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(189, 131, 83, 0.3)',
      borderColor: variant === 'outlined' ? '#a67145' : undefined,
    },
    transition: 'all 0.3s ease',
  };

  if (href) {
    return (
      <Button
        component={Link}
        href={href}
        variant={variant}
        sx={buttonStyles}
      >
        {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
        {children}
      </Button>
    );
  }

  return (
    <Button
      onClick={onClick}
      variant={variant}
      sx={buttonStyles}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </Button>
  );
}

