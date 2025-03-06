import { Box, styled } from '@mui/material';
// import BG2 from '../../assets/BG2.png';

export const backgroundStyle = styled(Box)({
  // backgroundImage: `url(${BG2})`,
  // background: 'black',
  width: '100%',
  display: 'flex',
  
  '@media (max-width: 599.95px)': {
    height: '100%',
  },
  '@media (min-width: 600px) and (max-width: 959.95px)': {
    height: '100%',
  },
  '@media (min-width: 960px) and (max-width: 1199.95px)': {
    height: '100%',
  },
  '@media (min-width: 1200px) and (max-width: 1279.95px)': {
    height: '100vh',
  },
  '@media (min-width: 1280px) and (max-width: 1534.95px)': {
    height: '120vh',
  },
  '@media (min-width: 1535px)': {
    height: '120vh',
  },
});

export const boxContents = styled(Box)({
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center', 
  maxHeight: '100vh', 
  margin: '2rem 5rem',
});

export const myPics = styled('img')(({ theme }) => ({
  width: theme.spacing(50),
  height: 'auto',
  borderRadius: '50%',
  '&:hover': {
    transform: 'scale(1.1)',
    transition: 'transform 0.2s ease-in-out',
  },
  '@media (max-width: 599.95px)': {
    width: theme.spacing(30),
  },
  '@media (min-width: 600px) and (max-width: 959.95px)': {
    width: theme.spacing(35),
  },
  '@media (min-width: 960px) and (max-width: 1279.95px)': {
    width: theme.spacing(40),
  },
  '@media (min-width: 1280px)': {
    width: theme.spacing(50),
  },
}));

export const header = styled('h1')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
  '@media (max-width: 599.95px)': {
    fontSize: '1.5rem',
  },
  '@media (min-width: 600px) and (max-width: 959.95px)': {
    fontSize: '2rem',
  },
  '@media (min-width: 960px) and (max-width: 1279.95px)': {
    fontSize: '2.5rem',
  },
  '@media (min-width: 1280px)': {
    fontSize: '3rem',
  },
}));

export const body = styled('p')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.primary,
  textAlign: 'justify',
  '@media (max-width: 599.95px)': {
    fontSize: '0.875rem',
  },
  '@media (min-width: 600px) and (max-width: 959.95px)': {
    fontSize: '1rem',
  },
  '@media (min-width: 960px) and (max-width: 1279.95px)': {
    fontSize: '1.125rem',
  },
  '@media (min-width: 1280px)': {
    fontSize: '1.3rem',
  },
}));

export const roundedBox = styled(Box)(({ theme }) => ({
  border: '2px solid white',
  borderRadius: '25px',
  padding: '0.15rem 1.5rem',
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.primary,
  '@media (max-width: 599.95px)': {
    fontSize: '0.875rem',
    maxWidth: '100%',
  },
  '@media (min-width: 600px) and (max-width: 959.95px)': {
    fontSize: '1rem',
    maxWidth: '95%',
  },
  '@media (min-width: 960px) and (max-width: 1279.95px)': {
    fontSize: '1.125rem',
    maxWidth: '90%',
  },
  '@media (min-width: 1280px)': {
    fontSize: '1.3rem',
    maxWidth: '85%',
  },
}));

export const lineStyle = styled(Box)({
  color: 'white',
  width: '100%',
  height: '5px',
  borderRadius: '5px',
  background: 'linear-gradient(to right, hsl(338, 100%, 50%), hsl(0, 100%, 50%), hsl(30, 100%, 50%), hsl(60, 100%, 50%))',
  marginBottom: '1rem',
});

export const highlight = styled('span')({
  color: 'yellow',
});
