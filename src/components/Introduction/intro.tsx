import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import * as styles from './Intro.style';

const Intro: React.FC = () => {

  return (
    <styles.BackgroundImage>
      <styles.OpacityOverlay />
      <styles.gridContainer container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h1" sx={styles.headlineStyle}>
            Website<br/>Portfolio
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={styles.lineStyle} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={styles.subtitleStyle}>
            Made with React, Typescript
          </Typography>
        </Grid>
      </styles.gridContainer>
    </styles.BackgroundImage>
  );
};

export default Intro;