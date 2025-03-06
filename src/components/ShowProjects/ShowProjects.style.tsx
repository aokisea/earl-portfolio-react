import { Box, styled } from '@mui/material';

export const OpacityOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 15%, rgba(0,0,0,0) 85%, rgba(0,0,0,1) 100%)`,
  pointerEvents: 'none',
});

interface BackgroundStyleProps {
  img: string;
}

export const BackgroundStyle = styled('div')<BackgroundStyleProps>(({ img }) => ({
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  width: '100%',
  position: 'relative',
}));

export const lineStyle = styled(Box)({
  width: '40%',
  height: '5px',
  borderRadius: '5px',
  background: 'linear-gradient(to right, hsl(338, 100%, 50%), hsl(0, 100%, 50%), hsl(30, 100%, 50%), hsl(60, 100%, 50%))',
  margin: '5rem 0rem 2rem',
});

export const headline = styled('h1')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
  textAlign: 'left',
  margin: '-0.5rem 0 .7rem 4rem',
}));

export const subtitle = styled('h2')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightLight,
  color: 'yellow',
  textAlign: 'left',
  margin: '0rem 4rem',
}));

export const genre = styled('h3')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightLight,
  color: theme.palette.text.primary,
  textAlign: 'left',
  margin: '6rem 0 -4.5rem 4rem',
}));
