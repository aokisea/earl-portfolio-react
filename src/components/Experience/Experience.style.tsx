import { Box, Grid, styled } from '@mui/material';
// import BG2 from '../../assets/BG3.png';

export const backgroundStyle = styled(Box)({
  // backgroundImage: `url(${BG2})`,
  // background: 'black',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  width: '100%',
});

export const Container = styled(Grid)(({theme}) => ({
  padding: '0rem 0rem 0rem 0rem',
  alignItems: 'center',
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.text.primary,
}));

export const Item = styled('div')({
  marginBottom: '20px',
  border: '1px solid #ccc',
  padding: '10px',
});

export const Title = styled('h3')({
  marginTop: 0,
});