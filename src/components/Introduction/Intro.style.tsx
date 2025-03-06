import BG1 from '../../assets/BG1.png';
import { styled } from '@mui/system';
import { Grid, Box } from '@mui/material';

export const BackgroundImage = styled(Box)({
  backgroundImage: `url(${BG1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
});

export const OpacityOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 85%, rgba(0,0,0,1) 100%)`,
  pointerEvents: 'none',
});
  
export const gridContainer = styled(Grid)({
  alignItems: 'center', 
  maxWidth: '90%',
  padding: '2rem' ,
  margin: '1rem',
  display: 'flex',
  height: '100vh',
  
  '@media (max-width: 1129.95px)': {
    alignContent: 'center', 
  },
  '@media (min-width: 1130px)': {
    alignContent: 'flex-start', 
  },
});

export const boxStyle = styled(Box)({
    color: 'text.primary',
    border: '2px solid white',
    borderRadius: '25px',
    boxSizing: 'border-box',
    padding: '1rem 2rem',
    marginBottom: '1rem',
    maxWidth: '25%',
    textAlign: 'left',
  });

  export const headlineStyle = {
    color: 'text.primary',
    marginBottom: '1rem',
    fontWeight: '700',
    fontSize: '6rem',
    lineHeight: '7rem',
    
    '@media (max-width: 1129.95px)': {
      fontSize: '5.5rem',
      textAlign: 'Center',
    },
    '@media (min-width: 1130px)': {
      fontSize: '6rem',
      textAlign: 'left',
      marginTop: '6rem',
    },
  };
  
  export const lineStyle = {
    height: '5px',
    borderRadius: '5px',
    background: 'linear-gradient(to right, hsl(338, 100%, 50%), hsl(0, 100%, 50%), hsl(30, 100%, 50%), hsl(60, 100%, 50%))',
    marginBottom: '1rem',
    
    '@media (max-width: 1129.95px)': {
      width: '100%',
    },
    '@media (min-width: 1130px)': {
      width: '30rem',
    },
  };
  
  export const subtitleStyle = {
    color: 'text.primary',
    fontSize: '1.5rem',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '300',
    textTransform: 'uppercase',
    letterSpacing: '5px',
    // fontStyle: 'italic',
    textAlign: 'left',
    
    '@media (max-width: 1129.95px)': {
      textAlign: 'center',
    },
    '@media (min-width: 1130px)': {
      textAlign: 'left',
    },
  };