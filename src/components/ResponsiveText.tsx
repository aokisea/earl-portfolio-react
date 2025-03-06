import React from 'react';
import { useMediaQuery, useTheme, Typography } from '@mui/material';

type ResponsiveTextProps = {
  smallScreenText: React.ReactNode;
  mediumScreenText: React.ReactNode;
  largeScreenText: React.ReactNode;
};

const ResponsiveText: React.FC<ResponsiveTextProps> = ({ smallScreenText, mediumScreenText, largeScreenText }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const getTextBasedOnScreenSize = () => {
    if (isSmallScreen) {
      return smallScreenText;
    } else if (isMediumScreen) {
      return mediumScreenText;
    } else if (isLargeScreen) {
      return largeScreenText;
    } else {
      return 'Default Text';
    }
  };

  return <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>{getTextBasedOnScreenSize()}</Typography>;
};

export default ResponsiveText;
