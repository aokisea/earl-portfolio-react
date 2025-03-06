import { Box, Link, styled, Typography } from '@mui/material';

export const backgroundStyle = styled(Box)({
  backgroundColor: '#f0f0f0',
  maxHeight: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const CardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '3rem', // Gap between cards
  marginTop: '3rem',
  maxWidth: '100%',
});

export const CardStyle = styled(Box)({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '16px',
  textAlign: 'center',
  width: '20rem',
  minHeight: '25rem',
  maxHeight: '20rem',
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'space-around', 
  alignItems: 'center', 
});

export const EmphasizedCardStyle = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '16px',
  textAlign: 'center',
  width: '20rem',
  // color: '#ffffff',
  minHeight: '25rem',
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'space-around', 
  alignItems: 'center', 
});

export const LinkStyle = styled(Link)({
  textDecoration: 'none',
});

export const CardImage = styled('img')({
  width: '7rem',
  borderRadius: '8px 8px 0 0',
  marginTop: '16px'
});

export const CardTitle = styled(Typography)({
  fontWeight: 'bold',
  marginTop: '16px',
});

export const CardText = styled(Typography)({
  marginTop: '8px',
  marginBottom: '16px',
  color: '#666',
});

export const Divider = styled('hr')({
  width: '90%',
  margin: '16px auto',
  border: 'none',
  borderTop: '1px solid #ccc',
});
