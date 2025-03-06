import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';

export const HeaderContainer = styled('header')(({ theme }) => ({
    backgroundColor: 'rgb(0,0,0,0.3)',
    padding: theme.spacing(2),
    position: 'sticky',
    top: 0,
    zIndex: 10,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 1129.95px)': {
        marginTop: theme.spacing(-14),
    },
    '@media (min-width: 1130px)': {
        marginTop: theme.spacing(-12),
    },
    
  }));
  
 export const NavLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.h6.fontSize,
    margin: theme.spacing(0, 3),
    '&:hover': {
      cursor: 'pointer',
      color: '#FFFF00', // Change color to primary color
      transition: 'color 0.3s ease-in-out', // Add smooth transition
    },
  }));
  
export const NavLinkTitle = styled(Link)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamily,
    border: '2px solid white',
    borderRadius: '25px',
    margin: theme.spacing(0, 3),
    
    '@media (max-width: 1129.95px)': {
      fontSize: '1.1rem',
      padding: '0.15rem 0.5rem',
    },
    '@media (min-width: 1130px)': {
      padding: '0.15rem 1.5rem',
      fontSize: theme.typography.h6.fontSize,
    },
    
    '&:hover': {
      cursor: 'pointer',
      color: '#FFFF00', // Change color to primary color
      border: '2px solid yellow',
      transition: 'color 0.3s ease-in-out, border 0.3s ease-in-out', // Add smooth transition
    },
  }));
  